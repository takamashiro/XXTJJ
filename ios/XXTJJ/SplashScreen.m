//
//  SplashScreen.m
//  XXTJJ
//
//  Created by takamashiro on 2016/12/23.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "SplashScreen.h"

static bool waiting = true;

@implementation SplashScreen

RCT_EXPORT_MODULE();
+ (void)show {
  while (waiting) {
    NSDate* later = [NSDate dateWithTimeIntervalSinceNow:0.1];
    [[NSRunLoop mainRunLoop] runUntilDate:later];
  }
}

RCT_EXPORT_METHOD(hide) {
  dispatch_async(dispatch_get_main_queue(),
                 ^{
                   waiting = false;
                 });
}

@end
