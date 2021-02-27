import React from "react"
import { Button, View,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Home";
import HomeScreen from "./Home_screen";
import newAppStore from "./newStore";
import Profile from "./Profile";
import Icon from 'react-native-vector-icons/Ionicons';
import User_Content from "./User_Info";
class Content extends React.Component{
    state={
        cart_count:newAppStore.cart_products.length,
        
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
        return(<Drawer.Navigator initialRouteName="Home_Screen" drawerContent={props=><User_Content {...props}/>}>
            <Drawer.Screen name="Home_Screen" children={props => (
                <HomeScreen
                cart_length={this.props.cart_length}
                  {...props}
                />
              )}
            //   options={{
            //       drawerLabel:"Home",
            //       drawerIcon:(props)=>{
            //           <View style={{width:100,borderWidth:1}}>
            //               <Text>HOme</Text>
            //           <Icon name="home" size={30}/>
            //           </View>
            //       }
            //   }}
              />
              
        </Drawer.Navigator>)
    }
}
const Drawer=createDrawerNavigator()
export default Content