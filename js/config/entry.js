/**
 * Created by takamashiro on 2016/12/22.
 */

import React,{Component} from 'react';
import {Navigator} from 'react-native';
import SplashScreen from '../native_modules/SplashScreen'
import MainPage from '../Main/MainPage'

export default class Entry extends Component {
    render() {
      return(
          <Navigator
            initialRoute={{component:MainPage}}
            renderScene={(route,navigator) => {
                return <route.component navigator={navigator} {...route.args}  />
            }}
          />
      )
    }

    componentDidMount() {
        SplashScreen.hide();
    }
}
