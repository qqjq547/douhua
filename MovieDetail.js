import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class MovieDetail extends Component {
  static navigationOptions = {
        title: '电影详情',//设置标题内容
    };
    static rowData;
    constructor(props) {
     super(props)
     const {state} = this.props.navigation
     rowData=state.params.data
   }

  render() {
    return (
      <View style={styles.container}>
      <WebView styles={styles.webview}
      automaticallyAdjustContentInsets={true}
      scalesPageToFit={true}
      startInLoadingState={true}
      source={{uri: rowData.alt+'mobile'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  webview: {
    flex:1,
    margin: 10,
  },
});
