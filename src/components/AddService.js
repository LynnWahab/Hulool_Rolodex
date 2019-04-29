import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { selectContactPhone } from 'react-native-select-contact';

export default class AddService extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subCategoryId: this.props.navigation.state.params.id,
      providerName: null,
      phoneNumber: null,
    }
  }


  render() {
    console.log(this.state.subCategoryId);
    console.log("whhy");
    return (
    
      <View style={styles.container}>
        <Text style={styles.header}> إضافة خدمة جديده</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="اسم مقدم الخدمه"
          //placeholder = "Password"
          placeholderTextColor = 'rgba(225,225,225,1)'
          returnKeyType = 'go'
          // style = {styles.input}
          underlineColorAndroid={"transparent"}
          onChangeText={(text) => this.setState({providerName: text})}
        />

        <TextInput
          style={styles.TextInput}
          placeholder = "رقم هاتف مقدم الخدمه"
          keyboardType = 'phone-pad'
          placeholderTextColor = 'rgba(225,225,225,1)'
          returnKeyType = 'next'
          // style = {styles.input}
          //onSubmitEditing={()=>this.passwordInput.focus()}
          keyboardType = 'phone-pad'
          // value = {this.state.providerName}
          onChangeText={(text) => this.setState({phoneNumber: text})}
          />

        <TouchableOpacity style={styles.button} onPress = {()=>
            selectContactPhone()
            .then(selection => {

                let { contact, selectedPhone } = selection;
                console.log(`Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`);
                // return selectedPhone.number;
            })

          }>
          <Text style={styles.btntext}> Add from contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {()=>
          // this.props.navigation.navigate('ListUsers')
          axios({
            method: 'post',
            url: 'https://rolodex2.azurewebsites.net/api/v1/listings/addlisting?code=DQzhL1VTa16VEZkR3EOCB2MdgtmllfFgMcW/PVjzMQVv89n7ksR1Iw==',
            data: {
              TITLE: this.state.providerName,
              PHONENUMBER: this.state.phoneNumber + "",
              SUBCATEGORYID: this.state.subCategoryId
            }
          }).then((response) => {
            console.log(response.data);
          })
          
          }>
          <Text style={styles.btntext}> إضافه</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#12CBC4",
  },
  header: {
    // flexDirection: 'row-reverse',
    fontSize: 25,
    //150
    marginTop: 100,
    fontWeight: '700',
    textAlign: "center",
    color: "white",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#FFF",
    borderBottomWidth: 1
  },
  TextInput: {
    textAlign: "right",
    marginTop:30,
    textAlign: "right",
    height: 50,
    fontSize: 20,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  button: {
    marginTop: 30,
    backgroundColor: 'rgba(225,225,225,0.5)',
    paddingVertical: 18,
    width: '100%',
    textAlign: "center",
    borderRadius: 15,

  },
  btntext:{ 
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    alignItems: "center",
    color: 'white'
  }
});