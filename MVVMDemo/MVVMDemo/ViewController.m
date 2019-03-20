//
//  ViewController.m
//  MVVMDemo
//
//  Created by czera on 2019/3/20.
//  Copyright © 2019 czcode. All rights reserved.
//

#import "ViewController.h"
#import "ViewModel.h"
#import "CollectionViewCell.h"

#define ScreenW [UIScreen mainScreen].bounds.size.width
#define ScreenH [UIScreen mainScreen].bounds.size.height

static NSString *reuseID = @"reuseID";

@interface ViewController ()<UICollectionViewDelegate,UICollectionViewDataSource>
@property (nonatomic, strong) UICollectionView  *collectionView;
@property (nonatomic, strong) NSMutableArray    *dataArray;
@property (nonatomic, strong) ViewModel       *viewModel;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
   
    //添加到视图
    [self.view addSubview:self.collectionView];
    __weak typeof(self) weakSelf = self;
    
    self.viewModel = [[ViewModel alloc] initWithBlock:^(id data) {
        [weakSelf.dataArray addObjectsFromArray:(NSArray *)data];
        [weakSelf.collectionView reloadData];
    } fail:^(id data) {
        NSLog(@"调用失败");
    }];
}

#pragma mark - UICollectionViewDataSource
- (NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section{
    return self.dataArray.count;
}

- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath{
    CollectionViewCell *cell  = [collectionView dequeueReusableCellWithReuseIdentifier:reuseID forIndexPath:indexPath];
    Model *model        = self.dataArray[indexPath.row];
    NSURL   *imageURL     = [NSURL URLWithString:model.imageUrl];
    cell.titleLabel.text  = model.title;
    cell.moneyLabel.text  = model.money;
    
    // 注意： 这里会出现内存泄漏，此demo只是演示 MVVM 的基础结构
    cell.imageView.image = [UIImage imageWithData:[NSData dataWithContentsOfURL:imageURL] ];
    return cell;
}

#pragma mark - UICollectionViewDelegate


#pragma mark - lazy
- (UICollectionView *)collectionView{
    if (!_collectionView) {
        
        //创建一个流水布局
        UICollectionViewFlowLayout *layout  = [[UICollectionViewFlowLayout alloc] init];
        layout.scrollDirection              = UICollectionViewScrollDirectionVertical;
        layout.minimumInteritemSpacing      = 5;
        layout.minimumLineSpacing           = 5;
        layout.itemSize                     = CGSizeMake((ScreenW-15)/2.0, 260);
        
        //初始化collectionView
        _collectionView = [[UICollectionView alloc] initWithFrame:CGRectMake(5, 0, ScreenW-10, ScreenH) collectionViewLayout:layout];
        _collectionView.backgroundColor = [UIColor whiteColor];
        _collectionView.scrollsToTop    = NO;
        _collectionView.pagingEnabled   = YES;
        _collectionView.showsHorizontalScrollIndicator = NO;
        _collectionView.bounces         = YES;
        _collectionView.dataSource      = self;
        _collectionView.delegate        = self;
        [_collectionView registerClass:[CollectionViewCell class] forCellWithReuseIdentifier:reuseID];
        
    }
    return _collectionView;
}

- (NSMutableArray *)dataArray{
    if (!_dataArray) {
        _dataArray = [NSMutableArray arrayWithCapacity:10];
    }
    return _dataArray;
}


- (void)didReceiveMemoryWarning{
}


@end
