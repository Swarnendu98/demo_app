import React ,{Component }from "react";
import { View, Text ,Button,Image} from "react-native";

class settingsComponent extends Component{
    render(){
        return(
            <View>
                <Text>IN SETTINGS SCREEN</Text>
                <Button
                title ="Go to users "
                onPress = {(navigation)=>this.props.navigation.navigate('Users',{
                    UserID : 1,
                    UserName :'Swarnendu',
                    UserTitle : 'Dawn' 
                })}
                /> 
            </View>

        )
    }
}
export default settingsComponent