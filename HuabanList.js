import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  Navigator,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import EasyListView from 'react-native-easy-listview-gridview'



export default class HuabanList extends Component {
  static navigationOptions = {
      title: "花瓣列表",
    };

  static type =34;
  static curThumb =[];
  static curTitle =[];
  constructor(props) {
   super(props)
   const {state} = this.props.navigation
   type=state.params.type
   this.renderItem = this._renderItem.bind(this)
   this.onFetch = this._onFetch.bind(this)
   this.state={
     curIndex:0
   }
 }
 _onFetch(pageNo, success, failure){
   fetch('http://route.showapi.com/819-1?showapi_appid=9108&type='+type+'&num=20&page='+pageNo+'&showapi_sign=50f48ef1cf2d4d3184001ccdf2c431f5')
     .then((response) => response.json())
     .then((responseJson) => {
       if (responseJson.showapi_res_code==0) {
         if (pageNo==1) {
           this.curThumb=[]
           this.curTitle=[]
         }
         var items =[]
         for (var i = 0; i < 20; i++) {
           this.curThumb.push(responseJson.showapi_res_body[i].thumb)
           this.curTitle.push(responseJson.showapi_res_body[i].title)
           items.push(responseJson.showapi_res_body[i])
         }
         success(items)
       }else{
         failure(responseJson.showapi_res_error)
       }
     })
     .catch((error) => {
     failure(error)
     });
 }
 render() {
   return (
     <EasyListView
       rowHeight={100}
       column={2}
       renderItem={this.renderItem}
       fixedData={this.state.dataArr}
       refreshHandler={this.onFetch}
       loadMoreHandler={this.onFetch}
     />
   )
 }
 _renderItem(index, rowData, sectionID, rowID, highlightRow) {
   return (
     <View
       key={index}
       style={styles.rowContainer}>
       <TouchableHighlight
         style={{flex: 1}}
         onPress= {() =>
           this._gotoSample(rowData)}>
         <View
           style={styles.rowContent}>
           <Image style={styles.rowImage}
           source={{uri: rowData.thumb}}
           resizeMode='cover' >
           <Text
             style={styles.rowTitle}
             numberOfLines={1}>
             {rowData.title}
           </Text>
           </Image>
         </View>
       </TouchableHighlight>
     </View>
   )
 }
 _gotoSample(rowData){
   var index =0;
   for (var i = 0; i < this.curTitle.length; i++) {
     if (rowData.title==this.curTitle[i]) {
       index = i;
       break;
     }
   }
      this.props.navigation.navigate('gallery',{ page:index,list: this.curThumb,titlelist:this.curTitle});
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    overflow: 'hidden',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width * 2/3,
    borderWidth: 0.3,
    borderColor: '#bbbbbb'
  },
  rowContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  rowImage: {
    justifyContent:'flex-end',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width * 2/3,
  },
  rowTitle: {
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:3,
    textAlign:'center',
    color: 'white',
    fontSize: 13
  },
  separate: {
    height: 0.5,
    backgroundColor: '#dddddd'
  }
});
