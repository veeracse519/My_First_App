import React from "react"
import { View,Text,TouchableOpacity,Button } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import newAppStore from "./newStore";
class Cart_Icon extends React.Component{
    
    state={
        length:0
    }
    
render(){
    
    return(
    <TouchableOpacity onPress={this.props.cart_clicked}
        style={{display:"flex",justifyContent:"center",alignItems:"center",width:60,height:60,backgroundColor:"rgb(3, 15, 66)",borderRadius:50}}>
           <Icon name="cart-outline" size={45} color="goldenrod"/>
           <Text style={{color:"goldenrod",position:"absolute",top:15,right:23}}>{newAppStore.cart_products.length}</Text>
       </TouchableOpacity>
       )
}
}
export default Cart_Icon