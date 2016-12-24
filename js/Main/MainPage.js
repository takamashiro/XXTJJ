/**
 * Created by takamashiro on 2016/12/23.
 */
import React, { Component } from 'react';
import {View, Text, BackAndroid} from 'react-native';
import XTabBar from '../component/XTabBar';
export default  class MainPage extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', function() {
            BackAndroid.exitApp(0);
            return true;
        });
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <XTabBar navigator={this.props.navigator}/>
            </View>
        );
    }
}