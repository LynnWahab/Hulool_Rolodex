import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import { MaterialDialog } from 'react-native-material-dialog';
import axios from 'axios';
import EditListing from './EditListing';

export default class EditProfile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        // userId: this.props.navigation.state.params.userId,
        data:[
          {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name:"ماريا ماجد",    number:"76666666 "},
          {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"سليمان حسن",     number:"76666666 "},
          // {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"لين وهاب", number:"76666666 "},
          // {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"أميرا دبوس",  number:"76666666 "},
          // {id:5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name:"رمزي الحاج",  number:"76666666 "},
        ],
        delProfile: false,
        delService: false,
        person: {id:1, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: 'sdfj', number: '3908408'}
      }
  }

  handleDelProfCancel = () => {
    this.setState({ delProfile: false });
  }
  handleDelProfile = () => {
    console.log("Delete Profile");
    this.setState({ delProfile: false });
  }

  handleDelServiceCancel = () => {
    this.setState({ delService: false });
  }
  handleDelService = () => {
    console.log("Delete Service");
    this.setState({ delService: false });
  }

  render() {
    return (
      <ScrollView>
      
        <View style={styles.container}>
          <MaterialDialog
          style={{alignSelf: 'row-reverse'}}
          title="متأكد من ازالة الحساب الشخصي؟"
          visible={this.state.delProfile}
          cancelLabel="لا"
          okLabel="نعم" 
          onOk={() => {this.handleDelProfile()}}
          onCancel={() => {this.handleDelProfCancel()}}>
          </MaterialDialog>
          <MaterialDialog
          style={{alignSelf: 'row-reverse'}}
          title="متأكد من ازالة الخدمة؟"
          visible={this.state.delService}
          cancelLabel="لا"
          okLabel="نعم" 
          onOk={() => {this.handleDelService()}}
          onCancel={() => {this.handleDelServiceCancel()}}>
          </MaterialDialog>
          <View style={[styles.card, styles.profileCard]}> 
            
            <Image style={styles.avatar} source={{uri: this.state.person.image}} />
            <Button
                //onPress={onPressLearnMore}
                title="تغيير الصورة"
                color="#841584"
                accessibilityLabel="Change photo"
            />
          </View> 

          <View style={styles.card}>
            <Text style={styles.cardTitle}> الاسم</Text>   
            <TextInput 
                    placeholder = {this.state.data[0].name}
                    placeholderTextColor = 'rgba(0,0,0,1)'
                    color='rgba(0,0,0,1)'
                    returnKeyType = 'go'
                    style = {styles.input}
                    // onChangeText={(use) => this.setState({username})}
                    /> 
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}> رقم الهاتف</Text>   
            <TextInput
                    placeholder ={this.state.person.number}
                    placeholderTextColor = 'rgba(0,0,0,1)'
                    returnKeyType = 'go'
                    style = {styles.input}
                    keyboardType = 'phone-pad'
                    //ref {(input) => this.passwordInput = input}
                    /> 
          </View>
          <TouchableOpacity onPress={()=> this.setState({delProfile: true})}> 
              <Text style = {styles.buttonText2}> ازالة الحساب </Text>
          </TouchableOpacity>
          <View
             style={{
             borderBottomColor: 'black',
             borderBottomWidth: 1,
             marginTop: 3,
            }}
          />  
          <EditListing/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{   
    flex:1,
    // padding:8,
    // marginTop: '10%',
    backgroundColor : "#ffffff",
  },
  container1: {
    // paddingLeft: 7,
    // paddingRight: 16,
    // paddingVertical: 12,
    flexDirection: 'row-reverse',
    // alignItems: 'center',
    borderBottomColor: 'purple', 
    borderBottomWidth: 1

  },
  cardTitle:{
    alignSelf: 'flex-end',
    color:"#808080",
    fontSize:19,
    // marginBottom:30,
  },
  cardTitle2:{
    // alignSelf: 'center',
    color:"#841584",
    fontSize:22,
    fontWeight: 'bold',
    marginBottom:3,
  },
  cardTitle3:{
    alignSelf: 'center',
    color:"#808080",
    fontSize:19,
  },
  avatar:{
    width:150,
    height:150,
    borderRadius: 70,
  },
  input: {
    textAlign: 'right',
    height: 50,
    fontSize: 20,
    backgroundColor: 'rgba(225,225,225,0.2)',
    // marginBottom: 20,
    color: '#000',
    // paddingHorizontal: 50,
},
    input2: {
    textAlign: 'right',
    height: 50,
    fontSize: 20,
    // backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 20,
    color: '#000',
    // paddingHorizontal: 50,
},
  card:{
    backgroundColor: "#FFFFFF",
    borderRadius:10,
    // padding:10,
    // height:'6%',
    // marginTop:'1%',
  },
  profileCard:{
    // height:'13%',
    alignItems: 'center',
    // marginTop:10,
    // marginBottom: 3,
  },
  name:{    
    textAlign: 'right',
    height: 50,
    fontSize: 20,
    backgroundColor: 'rgba(225,225,225,0.2)',
    padding: 10,
    color: '#000',
    paddingHorizontal: 10,
  },
  photosContainer:{
    flexDirection: 'row-reverse',
    // flexWrap: 'wrap',
    height: 'auto',
  },
  photo:{
    borderRadius: 10,
    width:113,
    height:113,
    marginTop:5,
    marginRight:5,
    alignSelf: 'flex-end',
  },
  buttonText2: {
    textAlign: 'center',
    color: '#12CBC4',
    fontWeight: '500',
    textDecorationLine: 'underline',
    marginTop: 7,
    marginBottom: 4,
},

content: {
  // marginLeft: 16,
  flex: 1,
  // flexDirection: 'row-reverse',
  marginTop: 5,
  // marginRight: 16, 
  textAlign: 'right'
},
image:{
  width:140,
  height:140,
  borderRadius:65,

},
imandcat:{
  marginTop: 20,
  marginBottom: 100,
  marginRight: 3,
  marginLeft:20,
  alignSelf: 'flex-end',
}
});