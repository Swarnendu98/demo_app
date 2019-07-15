import React ,{Component }from "react";
import { AppRegistry,View, Text ,Button,Image,StatusBar,TouchableOpacity} from "react-native";
import logo from './images/9922.png'

class HomeScreen extends React.Component {


    static navigationOptions =({navigation})=> {
      return{
        tabBarIcon:(focused,horizontal,tintColor)=>{
          return <Image
          source ={logo}
          style={{width :30,height :30}}
          />
    
        },
        title : 'Home',
        
        headerStyle:{
            backgroundColor :"#df78ef"
        },
        headerTintColor :'#ffffff',
        headerLeft :(
        <TouchableOpacity 
        onPress= {()=>navigation.navigate('Users')}
        >
        <Image
        source = {logo}
        style = {{height :20 ,width :20,marginLeft  : 5}}
        
        />
        </TouchableOpacity>),



// headerRight :(
//   <TouchableOpacity 
//   onPress= {()=>navigation.navigate('Users')}
//   >
//   <Image
//   source = {logo}
//   style = {{height :20 ,width :20,marginRight  : 5}}
  
//   />
//   </TouchableOpacity>)
        
    }
  }
  

  render() {
    return (
      

      
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" ,backgroundColor :"#e1bee7"}}>
              <StatusBar  backgroundColor = "#790e8b"/>

        <Text>Home Screen</Text>
        <View style={{width :"80%"}}>
        <Button 
        style = {{width :"80%"}}
        title = "Go to users"
        onPress={
            ()=>this.props.navigation.navigate('Users') 
        }
        />
        </View>
      </View>
    );
  }
}



export default HomeScreen;