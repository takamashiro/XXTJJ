/**
 * Created by takamashiro on 2016/12/23.
 */

import React, {Component} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import px2dp from '../utils/px2dp'

//four modules

export default class XTabBar extends Component {
    static defaultProps = {
        selectedColor: 'rgb(22,131,251)',
        normalColor: '#a9a9a9'
    };

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
            tabName: ['首页','发现','消息','我']
        }
    }

    componentWillMount() {
        const {selectedColor, normalColor} = this.props;
        Icon.getImageSource('md-notifications', 50, normalColor).then((source) => this.setState({ notificationNormal: source }));
        Icon.getImageSource('md-notifications', 50, selectedColor).then((source) => this.setState({ notificationSelected: source }));
        MIcon.getImageSource('home',50, normalColor).then((source) => this.setState({ homeNormal: source }));
        MIcon.getImageSource('home',50, selectedColor).then((source) => this.setState({ homeSelected: source }));
        MIcon.getImageSource('face', 50, normalColor).then((source) => this.setState({ meNormal: source }));
        MIcon.getImageSource('face', 50, selectedColor).then((source) => this.setState({ meSelected: source }));
        MIcon.getImageSource('explore', 50, normalColor).then((source) => this.setState({ compassNormal: source }));
        MIcon.getImageSource('explore', 50, selectedColor).then((source) => this.setState({ compassSelected: source }));
    }
    render(){
        const {selectedColor} = this.props;
        const {tabName} = this.state;
        return(
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={styles.tabbar}
                sceneStyle={{ paddingBottom: styles.tabbar.height }}>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[0]}
                    selected={this.state.selectedTab === 'home'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.homeNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.homeSelected} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {<View><Text>Home</Text></View>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[1]}
                    selected={this.state.selectedTab === 'compass'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.compassNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.compassSelected} />}
                    onPress={() => this.setState({ selectedTab: 'compass' })}>
                    {<View><Text>Composs</Text></View>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[2]}
                    selected={this.state.selectedTab === 'notification'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.notificationNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.notificationSelected} />}
                    onPress={() => this.setState({ selectedTab: 'notification' })}>
                    {<View><Text>Message</Text></View>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[3]}
                    selected={this.state.selectedTab === 'me'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.meNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.meSelected} />}
                    onPress={() => this.setState({ selectedTab: 'me' })}>
                    {<View><Text>Profile</Text></View>}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tabbar: {
        height: px2dp(49),
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    tabStyle:{
        padding: px2dp(3)
    },
    tab: {
        width: px2dp(22),
        height: px2dp(22)
    }
});