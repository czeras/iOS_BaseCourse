//
//  CollectionViewCell.h
//  MVVMDemo
//
//  Created by czera on 2019/3/20.
//  Copyright © 2019 czcode. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface CollectionViewCell : UICollectionViewCell
@property (nonatomic, strong) UIImageView *imageView;
@property (nonatomic, strong) UILabel     *titleLabel;
@property (nonatomic, strong) UILabel     *moneyLabel;
@end

NS_ASSUME_NONNULL_END
