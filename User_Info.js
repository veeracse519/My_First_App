import React from "react"
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import { View,Text,Image,Button,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import Offer from "./offers.png"
import newAppStore from "./newStore";
import { BackHandler } from "react-native";
class User_Content extends React.Component{
      state={
            log_out_status:null,
            // load:true
      }
      logOut=async()=>{
            const {hitLogout}=newAppStore;
            await this.setState({log_out_status:true})
            await hitLogout()
            // const{network_status}=newAppStore
            if(newAppStore.status===false){
                const {navigation}=this.props
                navigation.navigate("Load")
            }
            else{
                
            await this.setState({log_out_status:false})
                alert("Network Error")
            }
            
        
      }
    render(){
          const{current_user}=newAppStore
      //     const{load}=this.state
      //     alert(load)
        return(
      <View>
            <View style={{height:"100%"}}>      
            <View style={{width:"100%",backgroundColor:"#ffd966",height:"30%",borderWidth:1,display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
              <Image
              style={{width:100,height:100,borderRadius:50}}
              source={{uri:current_user.url}}
              // source={{uri:"https://res.cloudinary.com/veera/image/upload/v1612777999/veera_images/vf3bs5hwolm6awbx7syp.jpg"}}
              />
              {current_user.Gender==="Male"?<Text>Mr. {current_user.First_Name+" "+current_user.Last_Name}</Text>:<Text>Mrs. {current_user.First_Name+" "+current_user.Last_Name}</Text>}
              <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginLeft:20}}>
              <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <Icon name="people" size={30}/>
              <Text style={{fontSize:20}}>{current_user.Friends.length} Followers</Text>
              </View>
              <Icon name="share-social-sharp" size={30} style={{marginRight:20}}/>
              </View>
              </View>
              <View style={{height:"60%",display:"flex",flexDirection:"column",marginLeft:10,justifyContent:"space-around"}}>
                  <TouchableOpacity
                  onPress={()=>this.props.navigation.navigate("Home_Screen")}
                  style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:"70%",height:30,borderRadius:5}}>
                        <Icon style={{width:"30%"}} name="home" size={25}/>
                        <Text style={{fontSize:25,width:"70%"}}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={()=>this.props.navigation.navigate("user_profile")}
                  style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:"70%",height:30,borderRadius:5}}>
                        <Icon style={{width:"30%"}} name="key" size={25}/>
                        <Text style={{fontSize:25,width:"70%"}}>Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={()=>this.props.navigation.navigate("Cart_Screen")}
                  style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:"70%",height:30,borderRadius:5}}>
                        <Icon style={{width:"30%"}} name="cart" size={25}/>
                        <Text style={{fontSize:25,width:"70%"}}>My orders</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:"70%",height:30,borderRadius:5}}>
                        <Icon style={{width:"30%"}} name="pricetags" size={25}/>
                        <Text style={{fontSize:25,width:"70%"}}>Offers</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={this.logOut}
                  style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:"70%",height:30,borderRadius:5}}>
                        <Icon style={{width:"30%"}} name="log-out" size={25}/>
                        <Text style={{fontSize:25,width:"70%"}}>Log Out</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
        )
    }
}
export default User_Content