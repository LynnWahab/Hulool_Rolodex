import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,

} from 'react-native';
import { MaterialDialog } from 'react-native-material-dialog';


export default class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repVisible: false,
      delVisible: false,
      comm:[
        {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name:"ماريا ماجد",    comment:"الطبيب دعونا في المكتب بسرعة حتى وقت الانتظار لم يكن سيئا للغاية. كان السعر جيد والخدمة رائعة", time: '4:50 am'},
        {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"سليمان حسن",     comment:" كان الطبيب لطيفًا للغاية ومحترفًا ، لكن الوقت الذي انتظرناه كان كثيرًا. انتظرنا ساعة واحدة ولم نر الطبيب إلا لمدة عشر دقائق", time: '7:50 pm'},
        {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"لين وهاب", comment:"لقد ذهبنا إلى أربعة أطباء آخرين وكان الطبيب سامي فقط قادرًا على اكتشاف المشكلة في النهاية. ينصح به بشده", time: '1:30 pm'},
        {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"أميرا دبوس",  comment:"  طبيب سيء حقًا ، خدمة سيئة ، مكتب متسخ ، ومن الصعب العثور على موقع العيادة. ", time: '3:32 pm'},
        {id:5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name:"رمزي الحاج",  comment:"متسمب مسينتب سثث صحثهص ققق ثصثثص ضجض صصثص ذمتستس ذنتتيت تهثعقهصعق صح حهعه ", time: '5:00 pm'},
       ],
       COMMENTS: this.props.COMMENTS
    }
    
  }

  handleRepCancel = () => {
    this.setState({ repVisible: false });
  }
  handleSendRep = () => {
    console.log("report");
    this.setState({ repVisible: false });
  }

  handleDelCancel = () => {
    this.setState({ delVisible: false });
  }
  handleDel = () => {
    console.log("delete");
    this.setState({ delVisible: false });
  }

  render() {
    return (
      <View style={styles.container1}>
      {/* {console.log(this.state.COMMENTS)} */}

      <MaterialDialog
          style={{alignSelf: 'row-reverse'}}
          title="Are you sure you want to report"
          visible={this.state.repVisible}
          cancelLabel="no"
          okLabel="yes" 
          onOk={() => {this.handleSendRep()}}
          onCancel={() => {this.handleRepCancel()}}>
      </MaterialDialog>

      <MaterialDialog
          style={{alignSelf: 'row-reverse'}}
          title="Are you sure you want to delete"
          visible={this.state.delVisible}
          cancelLabel="no"
          okLabel="yes" 
          onOk={() => {this.handleDel()}}
          onCancel={() => {this.handleDelCancel()}}>
      </MaterialDialog>

      <FlatList
        style={styles.root}
        data={this.state.COMMENTS}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.COMMENTID;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          return(
            <View style={styles.container}>
              <TouchableOpacity>
                <Image style={styles.image} source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{Notification.USERNAME}</Text>
                  <Text style={styles.time}>
                    {Notification.DATE}
                  </Text>
                  <TouchableOpacity onPress={() => this.setState({repVisible: true})}>
                    <Image style={styles.flag} source = {require('../images/report.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({delVisible: true})}>
                    <Image style={styles.flag} source = {require('../images/report.png')}/>
                  </TouchableOpacity>
                </View>
                <Text style={styles.comment} rkType='primary3 mediumLine'>{Notification.COMMENT}</Text>
              </View>
            </View>
          );
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row-reverse',
  },
  root: {
    backgroundColor: "#ffffff",
    marginTop:10,
  },
  container: {
    paddingLeft: 7,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row-reverse',
    alignItems: 'center',

  },
  content: {
    marginLeft: 16,
    flex: 1,
    // textAlign: 'right'
  },
  comment: {
    textAlign: 'right',
  },
  contentHeader: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
  flag:{
    height: 20,
    width: 20,
  },
});