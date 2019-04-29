import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import BottomDrawer from 'rn-bottom-drawer';
// import EditProfile from './EditProfile'

import axios from 'axios';

export default class HomePage extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        loaded: false,
        userId: this.props.navigation.state.params.userId,
        preImage: "https://rolodex2.blob.core.windows.net/photos/",
        
      };  
    }
  
   async componentWillMount() {
      await this.fetchData();
    }
    
    fetchData = async () => {
      axios.get('https://rolodex2.azurewebsites.net/api/v1/Categories?code=DQzhL1VTa16VEZkR3EOCB2MdgtmllfFgMcW/PVjzMQVv89n7ksR1Iw==')
      .then((response) => {
        this.setState({data: response.data});
        this.setState({loaded: true});
        console.log("HomePage data fetched:");
        console.log(response.data);
        });
    }

    renderContent = () => {
      const { navigate } = this.props.navigation;
      {
        if(this.state.loaded){
            return (
            <FlatGrid
            itemDimension={150}
            items={this.state.data}
            style={styles.gridView}
            renderItem={({ item, index }) => (
              <View style={styles.itemContainer}>
                <TouchableOpacity onPress={ ()=>
                  navigate('SubCategoriesPage', {
                    id: item.CATEGORYID,
                    title: item.TITLE,
                    userId: this.state.userId
                  })
                  
                }>
                  <View style={styles.logoContainer} >
                    <Image style={styles.logo}
                      source={{uri: this.state.preImage+item.IMAGE}}
                    />

                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
          );
      }else{
          return(
          <View style={styles.container}>
            < ActivityIndicator />
          </View>
          )
        }
      }
    }
  
    render() {
      return (
        <View style={styles.container}>
          {this.renderContent()}
          <BottomDrawer
           containerHeight={60}
           backgroundColor='#dcdcdc'>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=> {}}>
                <Image style={styles.flag} source = {require('../images/home.png')}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {} }>
                <Image style={styles.flag} source = {require('../images/profileicon.png')}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.flag} source = {require('../images/info.png')}/>
              </TouchableOpacity>
            </View>
          </BottomDrawer>
        </View>
        );
    }
}


const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginRight: 10 ,
    marginTop: 8,
  },
  flag:{
    height: 40,
    width: 40,
    marginHorizontal: 40,
  },
  container:{
    flex:1,
    marginTop:0,
  },
  gridView: {
    marginTop: 30,
    flex: 2,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
  },
  logo: {
    width: 145,
    height: 145,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius: 90,
  },
});
