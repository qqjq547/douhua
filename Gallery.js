import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  CameraRoll,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Gallery from 'react-native-gallery';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class GalleryList extends Component {
  static navigationOptions = ({ navigation }) => {
  const {state} = navigation;
  return {
    title: `${state.params.title}`,
  };
};
    static titleArr=[];
    static list=[];
    static page = 0;
    constructor(props) {
     super(props)
     const {state} = this.props.navigation
     list=state.params.list
     titleArr=state.params.titlelist
     this.state = {
      page: this.page
    }
   }
   saveImg() {
     var promise = CameraRoll.saveToCameraRoll(list[this.state.page],'photo');
     promise.then(function(result) {
       alert('保存成功！地址如下：\n' + result);
     }).catch(function(error) {
       alert('保存失败！\n' + error);
     });
   }
   changeThisTitle (titleText){
       const {setParams} = this.props.navigation;
       setParams({ title: titleText })
   }
  render() {
    return (
      <View style={styles.container}>
      <Gallery
         style={{flex: 1, backgroundColor: 'black'}}
         images={list}
         pageMargin={10}
         onPageSelected={(page) => {
           this.setState({page});
           this.changeThisTitle(titleArr[page]);
        }}
       />
       <View style={styles.bottom}>
       <Text style={styles.text}>{(this.state.page+1)+'/'+list.length}</Text>
       </View>
       <Toast ref="toast"/>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  titleText: {
    padding:3,
    textAlign:'center',
    textAlignVertical:'center',
    color: 'white',
    fontSize: 12
  },
  bottom: {
    flexDirection:'row',
    backgroundColor:'black',
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    height:40,
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    flex:1,
    padding:3,
    textAlign:'center',
    color: 'white',
    fontSize: 13
  },
  button: {
    padding:3,
    width:60,
    height:30,
    textAlign:'center',
    textAlignVertical:'center',
    backgroundColor: '#42a5f5',
    borderRadius:15,
    color:'white',
    fontSize: 13
  },
});
