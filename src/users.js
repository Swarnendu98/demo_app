import React ,{Component }from "react";
import { View, Text,Button ,StatusBar,Image} from "react-native";
import logo from './images/1234.png'

class UserScreen extends React.Component {

    

    static navigationOptions=({navigation})=> {
      return {

        tabBarIcon:(focused,horizontal,tintColor)=>{
          return <Image
          source ={logo}
          style={{width :30,height :30}}
          />},

            title : 'Users',
            headerStyle:{
                backgroundColor :"#00c853"
                
            },
            headerTintColor :'#ffffff',
            headerMode :'none ',
            
    }
  }

  render() {

    const UserId = this.props.navigation.getParam('UserID','N/A')
    const UserName = this.props.navigation.getParam('UserName')
    const UserTitle = this.props.navigation.getParam('UserTitle')


    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" ,backgroundColor :"#adea66"}}>
       <StatusBar  backgroundColor = "#009624"/>
        <Text>Users Screen  
        </Text>
        <View style={{width :"100%"}}>
        <Button 
        style = {{width :"100%"}}
        title = "Go to home"
        onPress={
            ()=>this.props.navigation.navigate('Home') 
        }
        />
        </View>
        {/* <View style={{width :"100%"}}>
        <Button 
        style = {{width :"100%"}}
        title = "Open Side Drawer"
        onPress={
            ()=>this.props.navigation.openDrawer() 
        }
        />

        </View> */}
        <Text>ID : {UserId}</Text>
        <Text>Name : {UserName}</Text>
        <Text>Surname : {UserTitle}</Text>
      </View>
    );
  }
}



export default UserScreen;