import React ,{Component }from "react";
import { StyleSheet,ActivityIndicator,View,Text , Alert} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'


class AuthLoadingScreen extends React.Component{

    constructor(props){
        super(props);
        //this._loadData();
    }

    componentWillMount(){
        var init= AsyncStorage.getItem('log')
        if(init==null||typeof(init)==''||init==''){
            AsyncStorage.setItem('log','0')
        }
        AsyncStorage.getItem('log').then((result)=>{
            if(result){
                try{
                    const val = result;
                    //alert("data"+val)
                    this.props.navigation.navigate(val !='1'? 'Auth': 'App')
                }
                catch(e){

                }
            }
        })
    }

    render(){
        return(
            <View style= {styles.container}>   
            <ActivityIndicator size ='large' color ='red'/>
            {/* <Text>Auth</Text> */}
            
            </View>

        );
    }
   
    // _loadData(){
    //     const logged = AsyncStorage.getItem('log');
    //     if(typeof(logged)=='object')
    //     {
    //         logged='0'
    //     }
    //     alert('data='+logged)
        
    //     this.props.navigation.navigate(logged !=='1'? 'Auth': 'App')

    // }
}



const styles = StyleSheet.create({
    container : {
        
        width : 350,
        padding : 20 ,
        alignItems :'center',
        justifyContent :'center'
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
