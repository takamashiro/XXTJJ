/**
 * Created by takamashiro on 2016/12/22.
 */

import React,{Component} from 'react';
import {Navigator, Text, StyleSheet, View} from 'react-native';
import SplashScreen from '../native_modules/SplashScreen'

export default class Entry extends Component {
    render() {
      return(
          <View style={style.entry}>
          <Text>Entry</Text>
          </View>
      )
    }

    componentDidMount() {
        SplashScreen.hide();
    }
}

const style = StyleSheet.create({
    entry:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})