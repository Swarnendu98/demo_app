import React ,{Component }from "react";
import {StyleSheet,View, Text ,Button,Image,StatusBar,TouchableOpacity,TextInput,KeyboardAvoidingView} from "react-native";
import logo from './images/interface.png'
import logo1 from './images/panda.png'
import LoginForm from "./loginform"

class LoginScreen extends React.Component {


    static navigationOptions =({navigation})=> {
      return{
        header :null,

        title : 'Login',
        
        headerStyle:{
            backgroundColor :"#00c853"
        },
        headerTintColor :'#ffffff',
        
        



headerRight :(
  <TouchableOpacity 
  onPress= {()=>navigation.navigate('Users')}
  >
  <Image
  source = {logo}
  style = {{height :20 ,width :20,marginRight  : 5}}
  
  />
  </TouchableOpacity>)
        
    }
  }
  


  render() {
    return (
        <KeyboardAvoidingView behavior = "padding" style= {styles.container} enabled>
            <StatusBar backgroundColor ="#000051"/>
            <View style = {styles.logoContainer }>
                <Image source = {logo1}
                style ={styles.logo}/>
                <Text style = {styles.title}>Login</Text>
            </View>
            <View style = {styles.formComtainer }>
                <LoginForm/>

            </View>

        </KeyboardAvoidingView>
      

      
     
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor : "#3498db",
        alignItems : 'center',
        
    },
    logo : {
        marginTop : 20 ,
        height : 120,
        width : 120
    },
    logoContainer :{
        alignItems : 'center',
        flexGrow :1 ,
        justifyContent : 'center'
    },
    formComtainer:{

    },
    title :{
        fontSize : 25,
        color :"#FFF",
        marginTop : 5 ,
        textAlign : 'center',
        opacity : 0.8,
        fontWeight : '400'
        
        
    }
})



export default LoginScreen;