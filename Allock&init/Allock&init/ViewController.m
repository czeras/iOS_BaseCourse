//
//  ViewController.m
//  Allock&init
//
//  Created by czera on 2019/3/10.
//  Copyright © 2019 czcode. All rights reserved.
//

#import "ViewController.h"
#import "CZPerson.h"
#import <objc/runtime.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    // alloc 通过我们的类创建实例对象
    // init  为什么?
    // 啥也没做  why
    // 设计模式 ---  自由
    // 底层难  方法研究
    // LLVM 优化 - 什么?
    // 连接 编译 运行 空闲  C++
    //
//    CZPerson *p = [CZPerson alloc]; // objc -- 找资料 -- 1: 汇编
//    // objc_msgSend (id 消息接受者 , sel) ---  发送消息 --
//    //
//    CZPerson *p1 = [p init];
//    CZPerson *p2 = [p init];
//    NSLog(@"%p-%p-%p",p,p1,p2); // ? -- alloc init 到底做了什么 -- api
//    NSLog(@"end");
    
//    [self demo];
//    [self demo2];
    
//    [self demo3];
    
//    [self demo4];
    
    [self demo5];
}
-(void)demo5{
    CZPerson *p = [CZPerson alloc];
    p.name = @"汪";
    p.age = 18;
    NSLog(@"内存 %zu",class_getInstanceSize([p class]));
}

// alloc
-(void)demo4{
    // 测试内存对齐
    NSLog(@" || %d",demo_func(23));
    NSLog(@" || %d",demo_func(16));
}
int demo_func(int x){
    return (x+7) >> 3 <<3;
    // 0000 1101
    // 0000 0001
    // 0000 1000
}


// init 底层探索
-(void)demo3{
    /*
     探索步骤：
     1.在 init 方法打断点
     2.当项目走到这一步的时候进行 Debug -> debug workflow -> always show ..
     3.找到 bl objc_msgSend 并且运行到这一步
     4.按住 control 点击向下走一步的图标，进入到汇编 objc_msgSend()
     5.添加 init符号断点,发现 init 在 libobjc.A.dylib这个动态库中
     6.读取寄存器 register read 可以看到 init方法 。为了方便，我们直接去源码查看
     */
    CZPerson *p = [CZPerson alloc]; // objc -- 找资料 -- 1: 汇编
    // objc_msgSend (id 消息接受者 , sel) ---  发送消息 --
    //
    CZPerson *p1 = [p init];
    CZPerson *p2 = [p init];
    NSLog(@"%p-%p-%p",p,p1,p2); // ? -- alloc init 到底做了什么 -- api
    NSLog(@"end");
}

// 代码演示通过汇编找到对应的类库
-(void)demo2{
    /*查找步骤：
     注意：这里提供的是我自己运行的方法，验证的同学可以多操作几遍，重新验证需要 command + shift + k ，否则编译器 优化，部分步骤不走
     1. 在 alloc 方法上面下断点
     2. 当项目走到这一步的时候进行 Debug -> debug workflow -> always show ..
     3. 跳转到汇编界面 向下走3步，看到 bl指令，打个断点放到bl指令上，走到断点的地方
    
     4. 按住 control 点击向下走一步的图标，进入到汇编 objc_msgSend()
     5. 此时添加 符号断点 alloc，点击运行 --> libobjc,此时 会看到 _objc_rootAlloc函数 ，此时可以对照 objc750源码看。
     6. 点击 走一步 图标 会看到 汇编 class_createInstance 函数
     7. 汇编往下走(这里需要按住 control 并且点击走一步按钮)，知道 可以 看到 __NSUnrecognizedTaggedPointer 这个类型时
     8. 这里注意下 打断点 看 ret 指令之前的寄存器内容，在 createInstance 函数之前 寄存器x0 是没有 内容的
     */
    
    CZPerson *p = [CZPerson alloc]; // objc -- 找资料 -- 1: 汇编
    // objc_msgSend (id 消息接受者 , sel) ---  发送消息 --
    CZPerson *p1 = [p init];
    CZPerson *p2 = [p init];
    NSLog(@"%p-%p-%p",p,p1,p2); // ? -- alloc init 到底做了什么 -- api
    NSLog(@"end");
}

// 演示 p、 p1 、p2 地址情况
-(void)demo{
    CZPerson *p = [CZPerson alloc];
    
    CZPerson *p1 = [p init];
    CZPerson *p2 = [p init];
    NSLog(@"%p-%p-%p",p,p1,p2);
    NSLog(@"end");
}

@end
