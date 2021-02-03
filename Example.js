import React from "react"
import {View,Text} from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signle_Item_page from "./Single_Item";
class Example extends React.Component{
render(){
    return(
    <Stack.Navigator initialRouteName="Item1">
      <Stack.Screen name="Item1" component={Signle_Item_page} />
    </Stack.Navigator>
    )
}
}
const Stack=createStackNavigator()
export default Example