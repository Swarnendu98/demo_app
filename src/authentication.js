import React ,{Component }from "react";
import { StyleSheet,ActivityIndicator,View,Text} from "react-native";
import {AsyncStorage} from '@react-native-community/async-storage'


class AuthLoadingScreen extends React.Component{

    constructor(props){
        super(props);
        this._loadData();
    }
    render(){
        return(
            <View style= {styles.container}>   
            <ActivityIndicator/>
            <Text>Auth</Text>

            </View>

        );
    }
    _loadData = async()=>{
        const logged = await AsyncStorage.getItem('log');
        this.props.navigation.navigate(logged !=='1'? 'Auth': 'App')

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

export default AuthLoadingScreen
