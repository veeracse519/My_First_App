import React from "react"
import {View,Text,ScrollView,Image,TextInput,TouchableOpacity,Button} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import newAppStore from "./newStore"
class Profile extends React.Component{
    state={
        user_Info:[],
        pass_status:true,
        log_out_status:false,
    }
    componentDidMount(){
        this.getUserInfo()
    }
    getUserInfo=()=>{
        const {current_user}=newAppStore
        this.setState({user_Info:current_user})
    }
    logout=async()=>{
        const {hitLogout}=newAppStore;
        await this.setState({log_out_status:true})
        await hitLogout()
        // const{network_status}=newAppStore
        if(newAppStore.status===false){
            const {navigation}=this.props
            navigation.navigate("Home")
        }
        else{
            
        await this.setState({log_out_status:false})
            alert("Network Error")
        }
        
    }
    show_hide=()=>{
        const {pass_status}=this.state
        this.setState({pass_status:!pass_status})
    }
    
render(){
    const {user_Info,pass_status,log_out_status}=this.state
    const {hitLogout}=newAppStore
    return(<ScrollView style={{flex:1,backgroundColor:"rgb(242, 253, 255)"}}>
    <View style={{height:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    
        <Image
        style={{height:100,width:100,borderRadius:50}}
        source={{uri:user_Info.url}}
        />
        <Icon style={{marginTop:-25,marginRight:-65,backgroundColor:"white",borderRadius:50}} name="camera" size={25}/>
        <Text style={{color:"white",paddingTop:20}}>Hello {user_Info.First_Name + " "+ user_Info.Last_Name}</Text>
    </View>
    <View style={{height:395,display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <View style={{borderRadius:5,width:"45%",diplay:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"white"}}>
        <TextInput
        style={{width:"85%"}}
        value={user_Info.First_Name}
        editable={false}
        ></TextInput>
        <Icon name="create" size={20}/>
        </View>
        <View style={{borderRadius:5,width:"45%",diplay:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"white"}}>

        <TextInput
        style={{width:"85%"}}
        value={user_Info.Last_Name}
        editable={false}
        ></TextInput>
        <Icon name="create" size={20}/>
        </View>
        </View>
        <View style={{width:"100%",backgroundColor:"white",borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
    <TextInput
         style={{width:"90%"}}
         value={user_Info.Email}
         editable={false}
         >
    
         </TextInput>
         <Icon name="create" size={20}/>
        </View>
        <View style={{width:"100%",backgroundColor:"white",borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
     <TextInput
        style={{width:"90%"}}
            value={user_Info.User_Name}
            editable={false}>
        </TextInput>
        <Icon name="create" size={20}/>
       </View>
        <View style={{width:"100%",backgroundColor:"white",borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <TextInput
        style={{width:"90%"}}
        secureTextEntry={pass_status}
         value={user_Info.Password}>
        </TextInput>
        <Icon onPress={this.show_hide} name={pass_status?"eye-off":"eye"} size={20}/>
        </View>
      <TouchableOpacity 
      onPress={this.logout}
      style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"goldenrod",height:40,textAlign:"center",borderRadius:5}}>
          {log_out_status?<Text >Signing Out...</Text>:<Text>Sign Out</Text>}
      </TouchableOpacity>
    
    </View>
    </ScrollView>
    )
    
}
}
export default Profile
//