import React ,{Component }from "react";
import { View, Text ,Button,Image} from "react-native";
import logo from './images/circle.png'
class LogoTitle extends Component{
    render(){
        return(
            <Image
            source = {logo}
            style ={{height :30 ,width :30 }}
            />
        )
    }
}
export default LogoTitle