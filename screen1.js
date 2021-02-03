import React from "react"
import {View,Text,Button,TextInput,StyleSheet,ScrollView} from "react-native"
// import {AsyncStorage} from "@react-native-community/async-storage"
import newAppStore from "./newStore"
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";

class App extends React.Component{
    style=StyleSheet.create({
     container:{
      display:"flex",
      flex:1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",

     },
     box:{
      borderRadius:10,
       display:"flex",
       height:200,
       width:300,
       flexDirection:"column",
       justifyContent:"space-around",
       alignItems:"center",
    },
    userBox:{
      borderRadius:10,
      width:200,
      height:40,
     
      shadowColor: 'red',
      shadowOpacity: 0.5,

      shadowRadius: 7,
      
    },
    buttonBox:{
      width:300,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around"
    }
   })
   state={
     network_status:false,
     enter_vals:null,
     sorry:null,
       text:"",
       pass:"",
       pass_status:true,
       show:true,
       sign_status:false
   }
   
   onPasswordShow=async()=>{
    //  if(this.state.pass.length!==0){
    await this.setState({pass_status:!this.state.pass_status})
    //  }
   }
   goToProfile=async()=>{
      await this.setState({sign_status:true})
       const {text,pass}=this.state
       if(text.length!==0 && pass.length!==0){
        await this.setState({show:false})
       let data={user_name:text,password:pass}
      await newAppStore.hitSignIn(data)
      let status=newAppStore.status
      let network_status=newAppStore.network_status

      if(network_status){
        await this.setState({text:"",pass:"",show:true,network_status:true,enter_vals:false,sorry:false,sign_status:false})
      }
      else{
        if(status){
          // await AsyncStorage.setItem("tocken",JSON.stringify(newAppStore.current_user))
          await this.setState({text:"",pass:"",show:true,network_status:false,enter_vals:false,sorry:false,sign_status:false})
          const {navigation}=this.props
         navigation.navigate('Account')
        }
        else{
          await this.setState({show:true,network_status:false,enter_vals:false,sorry:true,sign_status:false})
          // alert("Sorry sign up First")
        }
      }
      
    }
    else{
      await this.setState({show:true,network_status:false,enter_vals:true,sorry:false,sign_status:false})
      // alert("Enter values")
    }
    // const {navigation}=this.props;
    // navigation.navigate('Account')
   }
   goToSignUp=async()=>{
     await newAppStore.get_data()
     const{network_status}=newAppStore
     if(network_status){
       this.setState({network_status:true})
     }
     else{
      this.setState({network_status:false})
       const {navigation}=this.props
       navigation.navigate('Profile')
     }
   }
    render(){
  const{network_status,sorry,enter_vals,sign_status}=this.state
//    let user_info=AsyncStorage.getItem("tocken")
//    let user=JSON.parse(user_info)
//    if(user.User_Name)
//    {
//  alert(user.User_Name)
//  return
//    }

        return (
            
            <View style={this.style.container}>
              <Text>Log In Page</Text>
              {network_status?<Text style={{color:"red"}}>NetWork Error</Text>:sorry?<Text style={{color:"red"}}>Invalid Credientials</Text>:enter_vals?<Text style={{color:"red"}}>Enter Values</Text>:<Text></Text>}
             <View style={this.style.box}>
               <View style={{display:"flex",flexDirection:"row",alignItems:"space-around",borderBottomWidth:1}}>
              <TextInput
             style={this.style.userBox} 
              placeholder="Enter User Name..."
              onChangeText={t=>this.setState({text:t,network_status:false,sorry:false,enter_vals:false})}
              value={this.state.text}
              editable={this.state.show}
              />
              <Icon name="person-circle-outline" size={30} />
              </View>
              
              <View style={{display:"flex",flexDirection:"row",alignItems:"space-around",borderBottomWidth:1}}>
             
              <TextInput
              style={this.style.userBox}
              placeholder="Enter Password..."
              onChangeText={t=>this.setState({pass:t,network_status:false,sorry:false,enter_vals:false})}
              value={this.state.pass}
              secureTextEntry={this.state.pass_status}
              editable={this.state.show}
              />
              <Icon name={this.state.pass_status?"eye-off-outline":"eye-outline"} size={30} onPress={this.onPasswordShow}/>
             
              
              </View>
              {/* <View style={this.style.buttonBox}> */}
                <TouchableOpacity 
                disabled={sign_status} onPress={this.goToProfile}
                style={{backgroundColor:sign_status?"rgb(48, 46, 46)":"green",width:"80%",height:30,borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                  {sign_status?<Text style={{color:"white"}}>Signing In...</Text>:<Text style={{color:"white"}}>Sign In</Text>}
                </TouchableOpacity>
              {/* <Button  title="Sign In" disabled={!this.state.show} onPress={this.goToProfile} /> */}
              {/* <Button  title="Sign Up" disabled={!this.state.show} onPress={this.goToSignUp} /> */}
              {/* </View> */}
              <TouchableOpacity
              disabled={!this.state.show} onPress={this.goToSignUp}
              >
       <Text style={{color:"rgb(219, 20, 40)",borderBottomWidth:1}}>Register for an account?</Text>
     </TouchableOpacity>
              </View>
            </View>
            

          )
    }  
  }
  export default App