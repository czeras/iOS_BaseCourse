//
//  Model.h
//  MVVMDemo
//
//  Created by czera on 2019/3/20.
//  Copyright © 2019 czcode. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface Model : NSObject
@property (nonatomic, copy) NSString  *imageUrl;
@property (nonatomic, copy) NSString  *title;
@property (nonatomic, copy) NSString  *money;
// 缓存下载的图片
@property (nonatomic, strong) UIImage *image;
@end

NS_ASSUME_NONNULL_END
