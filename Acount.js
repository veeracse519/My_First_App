import React from "react"
import {View,Text,Button, BackHandler} from "react-native"
import Cart from "./Cart";
import HomeScreen from "./Home_screen";
import newAppStore from "./newStore";
import Profile from "./Profile";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {createDrawerNavigator} from "@react-navigation/drawer"
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//  import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Content from "./drawer";
import TopTab from "./toptab";
import EncryptedStorage from "react-native-encrypted-storage";

class Account_page extends React.Component{
    

//    componentDidMount(){
//     const{Id}=this.props
//     alert(Id)
//     this.getUser_info(Id)
//    }
// getUser_info=async(id)=>{
// await newAppStore.setData(id)
// }
//    getData=()=>{
//        alert(1)
//    }

    //  handleBackButtonClick=async()=>{
    //     await newAppStore.hitLogout()
    //     const {navigation}=this.props;
    //     navigation.navigate('Home')
    // }
    state={
        cart_count:newAppStore.cart_products.length
    }
    componentDidMount(){
        this._unsubscribe =this.props.navigation.addListener('focus', () => {
            this.cartList()
            
          });
    
    }
    componentWillUnmount() {
        this._unsubscribe();
      }
      
    cartList=async()=>{
    // await newAppStore.setData()
    await this.setState({cart_count:newAppStore.cart_products.length})
    }
    
    render(){
       const{cart_count}=this.state
        const {cart_products}=newAppStore
        // alert("account")
        return(
        
        <Tap.Navigator
            initialRouteName="Home_Screen"
            activeColor="purple"
            shifting={true}
            labeled={true}
            // activeColor="#f0edf6"
        inactiveColor="#3e2465"
            // barStyle={{ backgroundColor: '#694fad' }}
            
        >
            <Tap.Screen
             name="Home_Screen" 
            //  component={Content}
            // initialParams={this.cartList}
            children={props => (
                <Content
                cart_length={this.cartList}
                  {...props}
                />
              )}
            
             options={{ 
                 tabBarLabel:"Home",
                 tabBarColor:"goldenrod",
                 tabBarIcon:({color})=>(
                  <Icon name="home-outline" color={color} size={25}/>
                 ),
             }}
             />
            
            <Tap.Screen 
            name="Profile"
             component={TopTab}
             options={{
                tabBarLabel:"Community",
                 tabBarColor:"goldenrod",//
                 tabBarIcon:({color})=>(
                    <View>
<Icon name="people-outline" color={color} size={25}/>
                    
                    </View>                    
                    
                   ),
             }}
           
            />
            <Tap.Screen 
            name="Cart_Screen"
            // component={Cart}
            children={props => (
                    <Cart
                    cart_length={this.cartList}
                      {...props}
                    />
                  )}
            
            options={{
                tabBarLabel:"Cart",
                title:"cart",
                tabBarColor:"goldenrod",
                tabBarIcon:({color})=>(
                    <View>
                    <Icon name="cart-outline" color={color} size={25}/>
                    <Text style={{position:"absolute",top:5,right:8,fontSize:8,color:"purple"}}>{cart_count}</Text>
                    </View>
                   ),
            }}
            />
            
            
        </Tap.Navigator>
        
        )
    }
}
const Tap=createMaterialBottomTabNavigator();
export default Account_page

// {"products":[{"availableSizes":["S","L","XL","XXL"],"currencyFormat":"₹","currencyId":"USD","description":"14/15 s/nº","id":1,"installments":9,"isFreeShipping":true,"price":800.24,"sku":18644119330491310,"style":"Preta com listras brancas","title":"Sphynx Tie Dye Grey T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.7faf6a31.jpg"}],"total":16}