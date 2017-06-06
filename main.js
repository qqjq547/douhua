/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
// import MainScreenNavigator from './movietab'
import MovieTab from './MovieTab'
import BeautyTab from './BeautyTab'


export default class Main extends Component {
    constructor(props) {
     super(props);
     this.state = {selectedTab:'beauty' };
   }
  render() {
        return (<TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab==='beauty'}
                        title="美女"
                        selectedTitleStyle={{color:'red',marginTop:3}}
                        renderIcon={()=><Image style={styles.icon} source={require('./image/beauty.png')} />}
                        renderSelectedIcon={() =>
                        <Image style={styles.icon} source={require('./image/beauty_press.png')}/>}
                        onPress={()=>this.setState({selectedTab:'beauty'})}
                    >
                      <BeautyTab nav={this.props.navigation}></BeautyTab>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab==='movie'}
                        title="电影"
                        selectedTitleStyle={{color:'red',marginTop:3}}
                        renderIcon={()=><Image style={styles.icon} source={require('./image/movie.png')} />}
                        renderSelectedIcon={() =>
                        <Image style={styles.icon} source={require('./image/movie_press.png')}/>}
                        onPress={()=>this.setState({selectedTab:'movie'})}
                    >
                         <MovieTab nav={this.props.navigation}></MovieTab>
                    </TabNavigator.Item>
                </TabNavigator>);
    }
    componentWillUnmount(){
        this.listener.remove();
    }
}


const styles = StyleSheet.create({
  icon:{
       width:25,
       height:25,
   }
});
