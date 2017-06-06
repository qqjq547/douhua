import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import EasyListView from 'react-native-easy-listview-gridview'


const url='https://api.douban.com/v2/movie/in_theaters'
export default class MovieTab extends Component {
  constructor(props) {
   super(props)
   this.renderItem = this._renderItem.bind(this)
   this.onFetch = this._onFetch.bind(this)
 }

 _onFetch(pageNo, success, failure){
   fetch(url)
     .then((response) => response.json())
     .then((responseJson) => {
         var array =[]
         for (var i = 0; i < responseJson.subjects.length; i++) {
           array.push(responseJson.subjects[i])
         }
        success(array)
     })
     .catch((error) => {
       failure(error)
     });
 }
 render() {
   return (
    <View style={styles.container}>
     <View style={styles.tabTitleView}>
       <Text style={styles.tabTitleText}>热门电影</Text>
     </View>
     <EasyListView
       column={3}
       renderItem={this.renderItem}
       refreshHandler={this.onFetch}
     />

     </View>
   )
 }
 _renderItem(index, rowData, sectionID, rowID, highlightRow) {
   return (
     <View
       key={index}
       style={styles.rowContainer}>
       <TouchableHighlight
         style={{flex: 1}}
         onPress= {() => this.gotoDetail(rowData)}>
         <View
           style={styles.rowContent}>
           <Image style={styles.rowImage} source={{uri: rowData.images.medium}} resizeMode='contain' >
           </Image>
           <Text
             style={styles.rowTitle}
             numberOfLines={1}>
             {rowData.title}
           </Text>
         </View>
       </TouchableHighlight>
     </View>
   )
 }
 gotoDetail(rowData) {
  this.props.nav.navigate('moviedetail',{ data: rowData});
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleText: {
    color: '#d0bbab',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: 'rgb(58, 45, 91)',
  },
  rowContainer: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'column'
  },
  rowContent: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'white',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft: 20,
    paddingRight: 20
  },
  rowImage: {
    justifyContent:'flex-end',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width * 4/9,
  },
  rowTitle: {
    flex:1,
    color: '#333333',
    textAlign:'center',
    fontSize: 14
  },
  separate: {
    height: 0.5,
    backgroundColor: '#bbbbbb'
  },
  separate: {
    height: 0.5,
    backgroundColor: '#dddddd'
  },
  tabTitleView:{
    flexDirection:'row',
    height:40,
    marginBottom:10,
  },
  tabTitleText:{
    flex:1,
    textAlign:'center',
    textAlignVertical:'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#2196F3',
    color:'white',
    fontSize:14
  },

});
