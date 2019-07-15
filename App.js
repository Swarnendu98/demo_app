import React ,{Component }from "react";
import HomeScreen from './src/home'
import { createStackNavigator,createAppContainer ,createDrawerNavigator,createSwitchNavigator,createBottomTabNavigator} from "react-navigation";
import UserScreen from './src/users'
import icon from './src/images/circle.png'
import icon2 from './src/images/interface.png'
import {Image}from 'react-native'
import SettingsComponent from './src/settings'
import LoginScreen from './src/login'
import AuthLoadingScreen from './src/authentication'



const AuthStack= createStackNavigator({
  Login : LoginScreen
})
const HomeStack = createBottomTabNavigator({

  Home :HomeScreen,
  Users : UserScreen
})

const AppNavigator = createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  App: HomeStack,
  Auth : AuthStack
},
{
  headerMode :'none',
  initialRouteName : 'Auth'

})

// const AppNavigator = createBottomTabNavigator({ 
//   Home:HomeScreen,
//   Users:UserScreen,
  
// },{
// initialRouteName :'Home',
// //order :['Users','Home'],
// tabBarOptions :{
//  showLabel :false,
//   inactiveBackgroundColor : "white",
//   activeBackgroundColor : "rgba(44, 25, 184, 0.46)",
//   inactiveTintColor : "green",
//   activeTintColor :  "white",
//   labelStyle :{
//     fontSize :15,    
//   },
//   tabStyle:{
//     //paddingBottom :10
//   },
//   allowFontScaling :false,
// },
// defaultNavigationOptions :(navigation)=>({

//   tabBarOnPress :({navigation,defaultHandler})=>{
//     if(navigation.state.key==='Users')
//     {
//       navigation.navigate('Users',{
//         UserID : 1,
//         UserName :'Swarnendu',
//         UserTitle : 'Dawn' 
//     })
//      }
//     else
//     {
//       defaultHandler();
//     }

//   }
// })
// })  






export default createAppContainer(AppNavigator);