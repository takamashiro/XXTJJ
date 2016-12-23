/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,} from 'react-native';
import Entry from './js/config/entry';
export default class XXTJJ extends Component {
  render() {
    return (
        <Entry/>
    );
  }
}
AppRegistry.registerComponent('XXTJJ', () => XXTJJ);