import React ,{Component }from "react";
import { StyleSheet,View, Text ,Button,Image,StatusBar,TouchableOpacity,TextInput} from "react-native";
import {AsyncStorage} from '@react-native-community/async-storage'
import {AsyncStorageStatic} from '@react-native-community/async-storage'



const UserInfo ={username :'admin',password:'12345'}

class LoginForm extends Component {

            constructor (props){
                super(props);
                this.state= {username :'',password : ""}
            }

    render(){
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.input} placeholder = "UserName or E-mail" maxLength = {20} returnKeyType ="next"
                onSubmitEditing= {()=>this.passwordInput.focus()} keyboardType = "email-address" autoCapitalize ="none" autoCorrect ={false}
                onChangeText = {(username)=>this.setState({username})}
                value= {this.state.username}/>
                <TextInput style = {styles.input} placeholder = "Password" maxLength = {12} secureTextEntry = {true} returnKeyType ="go"
                ref= {(input)=>this.passwordInput= input}
                onChangeText = {(password)=>this.setState({password})}
                value= {this.state.password}
                />
                <TouchableOpacity style= {styles.buttonContainer} onPress={this._signin}> 
                    <Text style = {styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    _signin = async()=>{

        var key = 'true'
        var result = key.toString()
        if(UserInfo.username==this.state.username&&UserInfo.password==this.state.password){
            // await AsyncStorage.setItem('logged',true)
             await AsyncStorage.setItem('log','1')
             //alert('logged in ')
            this.props.navigation.navigate('App')
        }
        else{
            alert("UserName or Password Wrong")
        }
    }
}

const styles = StyleSheet.create({
    container : {
        
        width : 350,
        padding : 20 
    },
    input :{
        height :40 ,
        width : "100%",
        backgroundColor : "rgba(255,255,255,0.7)",
        marginBottom : 15 ,
        borderRadius : 5,
        paddingHorizontal :10,
        
    },
    buttonContainer:{
        backgroundColor :"#1a237e",
        paddingVertical :10,
        borderRadius : 5

    },
    buttonText :{
        textAlign : 'center',
        color : "#ffffff",
        fontSize :20,
        fontWeight :'200'

    }

})
export default LoginForm