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
import { StackNavigator } from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator'
import Main from './main'
import HuabanList from './HuabanList'
import MovieDetail from './MovieDetail'
import GalleryList from './Gallery'

const head_hide = {
    header:null
};
const head_back_title = {
    headerBackTitleStyle:{
      color:'#FFFFFF'
    },
    headerStyle:{
      backgroundColor:'#42a5f5',
    },
    headerTitleStyle:{
      color:'#FFFFFF',
      fontSize:15,
      marginRight:50,
      textAlign:'center',
      alignSelf:'center'
    },
};
const SimpleApp = StackNavigator({
  main: { screen: Main , navigationOptions: head_hide},
 huabanlist: { screen: HuabanList ,navigationOptions:head_back_title},
 moviedetail: { screen: MovieDetail,navigationOptions:head_back_title},
 gallery: { screen: GalleryList,navigationOptions:head_back_title},
});


AppRegistry.registerComponent('douhua', () => SimpleApp);
