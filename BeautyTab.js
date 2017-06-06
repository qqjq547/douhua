import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class BeautyTab extends Component {
//大胸妹=34
// 小清新=35
// 文艺范=36
// 性感妹=37
// 大长腿=38
// 黑丝袜=39
// 小翘臀=40
   onSelected(type){
     switch (type) {
       case 34:
          this.props.nav.navigate('huabanlist',{ type: type});
          break;
      case 35:
           this.props.nav.navigate('huabanlist',{ type: type});
           break;
      case 36:
           this.props.nav.navigate('huabanlist',{ type: type});
           break;
      case 37:
          this.props.nav.navigate('huabanlist',{ type: type});
          break;
      case 38:
          this.props.nav.navigate('huabanlist',{ type: type});
          break;
      case 39:
          this.props.nav.navigate('huabanlist',{ type: type});
          break;
      case 40:
          this.props.nav.navigate('huabanlist',{ type: type});
          break;
       default:
     }

   }
    render() {
      return (
      <View style={styles.container}>
      <View style={styles.tabTitleView}>
        <Text style={styles.tabTitleText}>花瓣美女</Text>
      </View>
        <View style={styles.tabcontainer}>
        <View style={styles.rowdivide}/>
      <View style={styles.tabrow}>
      <View style={styles.colnumdivide}/>
      <TouchableOpacity onPress={this.onSelected.bind(this,34)} activeOpacity={0.5}>
     <Image style={styles.tabrowItemImage} source={require('./image/beauty.png')} resizeMode="contain">
     <Text style={styles.rowTitle}>{'大胸妹'}</Text>
     </Image>
     </TouchableOpacity>
     <View style={styles.colnumdivide}/>
      <TouchableOpacity onPress={this.onSelected.bind(this,35)} activeOpacity={0.5}>
      <Image style={styles.tabrowItemImage} source={require('./image/beauty.png')} resizeMode="contain">
      <Text style={styles.rowTitle}>{'小清新'}</Text>
      </Image>
      </TouchableOpacity>
      <View style={styles.colnumdivide}/>
      <TouchableOpacity onPress={this.onSelected.bind(this,36)} activeOpacity={0.5}>
      <Image style={styles.tabrowItemImage} source={require('./image/beauty.png')} resizeMode="contain">
      <Text style={styles.rowTitle}>{'文艺范'}</Text>
      </Image>
      </TouchableOpacity>
     <View style={styles.colnumdivide}/>
      </View>
      <View style={styles.rowdivide}/>
      <View style={styles.tabrow}>
      <View style={styles.colnumdivide}/>
      <TouchableOpacity onPress={this.onSelected.bind(this,37)} activeOpacity={0.5}>
      <Image style={styles.tabrowItemImage} source={require('./image/beauty.png')} resizeMode="contain">
      <Text style={styles.rowTitle}>{'性感妹'}</Text>
      </Image>
     </TouchableOpacity>
     <View style={styles.colnumdivide}/>
     <TouchableOpacity onPress={this.onSelected.bind(this,38)} activeOpacity={0.5}>
     <Image style={styles.tabrowItemImage} source={require('./image/beauty.png')} resizeMode="contain">
     <Text style={styles.rowTitle}>{'大长腿'}</Text>
     </Image>
     </TouchableOpacity>
     <View style={styles.colnumdivide}/>
     <TouchableOpacity onPress={this.onSelected.bind(this,39)} activeOpacity={0.5}>
     <Image style={styles.tabrowItemImage} source={require('./image/beauty.png')} resizeMode="contain">
     <Text style={styles.rowTitle}>{'黑丝袜'}</Text>
     </Image>
     </TouchableOpacity>
     <View style={styles.colnumdivide}/>
      </View>
      <View style={styles.rowdivide}/>
      <View style={styles.tabrowlast}>
      <View style={styles.colnumdivide}/>
      <TouchableOpacity onPress={this.onSelected.bind(this,40)} activeOpacity={0.5}>
      <Image style={styles.tabrowItemImage} source={require('./image/beauty.png')} resizeMode="contain">
      <Text style={styles.rowTitle}>{'小翘臀'}</Text>
      </Image>
     </TouchableOpacity>
     <View style={styles.colnumdivide}/>
     <View style={styles.tabrowItemEmpty}/>
     <View style={styles.colnumdivide}/>
     <View style={styles.tabrowItemEmpty} />
     <View style={styles.colnumdivide}/>
      </View>
      <View style={styles.rowdivide}>
      </View>
      </View>
       <Toast ref="toast"/>
      </View>
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
       tabcontainer:{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         marginTop:10,
         marginBottom:10,
       },
       tabrow:{
         flexDirection:'row',
         justifyContent: 'center',
         alignItems: 'center',
       },
       tabrowlast:{
         flexDirection:'row',
         justifyContent: 'center',
         alignItems: 'flex-start',
       },
         tabrowItemImage:{
           width:90,
           height:120,
           backgroundColor:'#ddd'
         },
         tabrowItemEmpty:{
           width:90,
           height:120,
         },
         rowTitle: {
           flex:1,
           justifyContent:'center',
           alignItems:'center',
           textAlignVertical:'center',
           backgroundColor:'rgba(0,0,0,0.5)',
           padding:3,
           textAlign:'center',
           color: 'white',
           fontSize: 15
         },
          rowdivide:{
            flex: 1,
            flexDirection:'row',
          },
          colnumdivide:{
            flex: 1,
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
