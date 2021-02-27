import React from "react"
import {View,Text,BackHandler,Alert,Button} from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import newAppStore from "./newStore"
import HomeScreen from "./Home_screen"
import { createStackNavigator } from "@react-navigation/stack"
import Account_page from "./Acount"
class Loading extends React.Component{
    state={loading:true,network_error:false}
    componentDidMount(){
        this._unsubscribe =this.props.navigation.addListener('focus', () => {
            this.getRouteName()
            // this.backAction=BackHandler.addEventListener("hardwareBackPress",()=>{
            //     BackHandler.exitApp()
            // })
          });
      }
      componentWillUnmount(){
          this._unsubscribe()
      }
      getRouteName=async()=>{
          await this.setState({loading:true,network_error:false})
      let tocken=await AsyncStorage.getItem("user")
      if(tocken!=null)
      {
       await newAppStore.setData()
       let status=await newAppStore.network_status;
       if(!status)
       {
       await this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'Account' }],
      });
      }
      else{
        await this.setState({loading:false,network_error:true})
    }
    }
    
      else
      {
        await this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
    }
     }
render(){
    const{loading,network_error}=this.state
    return(<View style={{width:"100%",height:"100%",backgroundColor:"goldenrod",display:"flex",justifyContent:"center",alignItems:"center"}}>
        {loading?<Text style={{fontSize:20}}>Loading...</Text>:network_error?
        <View>
            <Text>Something Went Wrong..</Text>
        <Button
        title="Refresh"
        onPress={this.getRouteName}
        /></View>:<Text></Text>}
    </View>)
}
}
export default Loading