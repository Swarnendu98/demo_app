import React ,{Component }from "react";
import { View, Text ,Button,Image,StatusBar,TouchableOpacity,ScrollView} from "react-native";
import logo from './images/home.png'
import AsyncStorage from "@react-native-community/async-storage";
import DataForm from "./dataform";

class HomeScreen extends React.Component {


    static navigationOptions =({navigation})=> {
      return{
        tabBarIcon:(focused,horizontal,tintColor)=>{
          return <Image
          source ={logo}
          style={{width :30,height :30}}
          />},
          tabBarOptions: {
           activeTintColor: 'tomato',
          }

      }
    }
      
  
  

  render() {
    return (
      

      //mainview
      <View style={{ flex: 1,backgroundColor :"#fff"}}>
              <StatusBar  backgroundColor = "#000051"/>


        {/* header */}
        <View style={{width :"100%",marginTop:10,height :50,flexDirection :'row',borderBottomColor: 'black',
    borderBottomWidth: 1,}}>
        <View style={{flex :1,padding :8}}>
          <Text style={{fontSize :24,color :"#1a237e ",fontWeight :"400",alignSelf:'center'}}>
          WELCOME !!
          </Text>
        </View>
        <View style = {{flex:1}}>
        <TouchableOpacity style={{width : 100,height: 43,backgroundColor : "#1a237e",padding :5,
        marginRight:5,borderRadius :20,alignSelf:'flex-end'}}
        onPress={
          ()=>{this.props.navigation.navigate('Auth') 
          AsyncStorage.setItem('log','0')
        }
      }
        >
          <Text style ={{color :'#ffffff',textAlign:'center',fontSize:20}}>
            Logout
          </Text>
        </TouchableOpacity>
        </View>
        </View>

        {/* body */}

        <ScrollView style={{height :"100%",width :"100%",paddingVertical :20}}>
          <DataForm nav = {this.props.navigation}/>
          

        </ScrollView>

      </View>
    );
  }
}



export default HomeScreen;