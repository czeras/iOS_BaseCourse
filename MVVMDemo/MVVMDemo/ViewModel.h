//
//  ViewModel.h
//  MVVMDemo
//
//  Created by czera on 2019/3/20.
//  Copyright © 2019 czcode. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Model.h"

/// 成功回调
typedef void(^SuccessBlock)(id data);
/// 失败回调
typedef void(^FailBlock)(id data);


NS_ASSUME_NONNULL_BEGIN

@interface ViewModel : NSObject
@property (nonatomic, copy) SuccessBlock successBlock;
@property (nonatomic, copy) FailBlock failBlock;

-(instancetype)initWithBlock:(SuccessBlock)successBlock fail:(FailBlock)failBlock;
@end

NS_ASSUME_NONNULL_END
