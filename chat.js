import React from "react"
import { View,Text,Image,TouchableOpacity,ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
class Chat extends React.Component{
    state={

        list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    }
    render(){
        const{list}=this.state
        return(
            <View>
                <Text>Chat</Text>
            </View>
        )
    }
}
export default Chat