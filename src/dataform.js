import React ,{Component }from "react";
import { StyleSheet,View, Text ,Button,Image,StatusBar,TouchableOpacity,TextInput} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import {AsyncStorageStatic} from '@react-native-community/async-storage'
import {DateTimePicker} from 'react-native-modal-datetime-picker'






class DataForm extends Component {

            constructor (props){
                super(props);
                this.state= {
                    first_name :"",
                    last_name : "",
                    nav: this.props.nav,
                    isDateTimePickerVisible: false,
                    DATE :""
                }
            }



            showDateTimePicker = () => {
                this.setState({ isDateTimePickerVisible: true });
              };
             
              hideDateTimePicker = () => {
                this.setState({ isDateTimePickerVisible: false });
              };
             
              handleDatePicked = date => {
                console.log("A date has been picked: ", date);
                this.hideDateTimePicker();
              };



    render(){
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.input} placeholder = "First-Name" maxLength = {20} returnKeyType ="next"
                 keyboardType = "default" autoCapitalize ="none" autoCorrect ={false}
                onChangeText = {(first_name)=>this.setState({first_name})}
                value= {this.state.first_name}/>
                <TextInput style = {styles.input} placeholder = "Last-Name" maxLength = {20} returnKeyType ="next"
                 keyboardType = "default" autoCapitalize ="none" autoCorrect ={false}
                onChangeText = {(last_name)=>this.setState({last_name})}
                value= {this.state.last_name}/>

            
                <TouchableOpacity style= {styles.buttonContainer} onPress={()=> this._signin()}> 
                    <Text style = {styles.buttonText}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </View>
            
        );
    }

    _signin(){

        var key = 'true'
        var result = key.toString()
        if(UserInfo.username==this.state.username&&UserInfo.password==this.state.password){
            // await AsyncStorage.setItem('logged',true)
              AsyncStorage.setItem('log','1')
             
             //alert('logged in ')
            this.state.nav.navigate('App')
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
        borderBottomColor :"black",
        borderBottomWidth: 1
        
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
export default DataForm