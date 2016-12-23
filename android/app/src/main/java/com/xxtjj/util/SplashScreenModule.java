package com.xxtjj.util;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


/**
 * Created by takamashiro on 2016/12/23.
 * http://facebook.github.io/react-native/docs/native-modules-android.html
 */

public class SplashScreenModule extends ReactContextBaseJavaModule {

    public SplashScreenModule(ReactApplicationContext reactApplicationContext){
        super(reactApplicationContext);
    }
    /**  return the string name of the NativeModule
    *    which represents this class in JavaScript.
    */
    @Override
    public String getName() {
        return "SplashScreen";
    }

    /** To expose a method to JavaScript a
     * Java method must be annotated
     * using @ReactMethod.
     */
    @ReactMethod
    public void hide(){
        SplashScreen.hide(getCurrentActivity());
    }

//    The last step within Java is to register the Module;
// this happens in the createNativeModules of your apps package.
// If a module is not registered it will not be available from JavaScript.
}
