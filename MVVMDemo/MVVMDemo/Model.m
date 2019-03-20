//
//  Model.m
//  MVVMDemo
//
//  Created by czera on 2019/3/20.
//  Copyright © 2019 czcode. All rights reserved.
//

#import "Model.h"

@implementation Model
- (NSString *)description{
    return [NSString stringWithFormat:@"%@ 售价 : %@",self.title,self.money];
}
@end
