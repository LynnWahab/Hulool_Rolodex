import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import BottomDrawer from 'rn-bottom-drawer';
// import EditProfile from './EditProfile'
import Home from './Home';

export default class AboutUs extends Component {
    render() {
        return(
        <View style={styles.container}>
         <ImageBackground resizeMode='contain' style= {styles.imgcont} source ={require('../images/aboutus.png')}/> 
          <BottomDrawer
           containerHeight={80}
           backgroundColor='#dcdcdc'>
            <View style = {styles.cont}>
              <TouchableOpacity onPress={()=> {} }>
                <Image style={styles.flag} source = {require('../images/home.png')}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.flag} source = {require('../images/profileicon.png')}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() =>{} }>
                <Image style={styles.flag} source = {require('../images/info.png')}/>
              </TouchableOpacity>
            </View>
          </BottomDrawer>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white'
    // flex:1,
    // marginTop:0,
  },
  imgcont: {
    // marginTop: 3,
    // marginBottom: 3,
    width: '100%',
    height: '100%',
  },
  cont: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  flag:{
    height: 30,
    width: 30,
    marginHorizontal: 45,
  }
});
