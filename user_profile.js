import React from "react"
import {View,Text,ScrollView,Image,TextInput,TouchableOpacity,StyleSheet,Button} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from "react-native-customized-image-picker";
import newAppStore from "./newStore"
import Load from "./load.png"
class UserProfile extends React.Component{
 
 state={
    user_Info:[],
    pass_status:true,
    log_out_status:false,
    update_status:false,
    updation_state:false,
    user_name:"",
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    user_name_status:false,
    first_name_status:false,
    last_name_status:false,
    email_status:false,
    password_status:false,
    user_name_border:false,
    first_name_border:false,
    last_name_border:false,
    email_border:false,
    password_border:false,
    id:null,
    loading_state:false
}
    
    componentDidMount(){
        // this.get_Item()
        this._unsubscribe=this.props.navigation.addListener('focus',()=>{
            this.getUserInfo()
        });

        
}

componentWillUnmount(){
    this._unsubscribe()
}
    
    getUserInfo=async()=>{
        const {current_user}=newAppStore
        await this.setState({
            user_name_status:false,
    first_name_status:false,
    last_name_status:false,
    email_status:false,
    password_status:false,
    user_name_border:false,
    first_name_border:false,
    last_name_border:false,
    email_border:false,
    password_border:false,
    update_status:false,
    id:current_user.id,
            user_Info:current_user,user_name:current_user.User_Name,first_name:current_user.First_Name,last_name:current_user.Last_Name,email:current_user.Email,password:current_user.Password})
    }
    logout=async()=>{
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
    update=async()=>{
        await this.setState({update_status:false})
   const{first_name,last_name,email,user_name,password,id}=this.state
        const data={First_Name:first_name,Last_Name:last_name,User_Name:user_name,Email:email,Password:password}
        await this.setState({loading_state:true})
        await newAppStore.profile_updation(data,id)
        await this.setState({loading_state:false})
        await this.getUserInfo()

        // await hitLogout()
        // // const{network_status}=newAppStore
        // if(newAppStore.status===false){
        //     const {navigation}=this.props
        //     navigation.navigate("Home")
        // }
        // else{
            
        // await this.setState({log_out_status:false})
        //     alert("Network Error")
        // }
        
    }
    updateStatus=()=>{
        this.setState({update_status:true})
    }
    clear=async()=>{
        const {hitLogout}=newAppStore;
        await this.setState({update_status:false})
        
        // await hitLogout()
        // // const{network_status}=newAppStore
        // if(newAppStore.status===false){
        //     const {navigation}=this.props
        //     navigation.navigate("Home")
        // }
        // else{
            
        // await this.setState({log_out_status:false})
        //     alert("Network Error")
        // }
        
    }
    show_hide=()=>{
        const {pass_status}=this.state
        this.setState({pass_status:!pass_status})
    }
handleImage=async()=>{
    const{imageUri,imageState,user_Info}=this.state
    let image=await ImagePicker.openPicker({cropping:true})
    // this.setState({image_path:image[0].path})
     let newFile={uri:image[0].path,
        type:`test/${image[0].path.split(".")[1]}`,
        name:`test/${image[0].path.split(".")[1]}`
    }
    
 
    await this.setState({updation_state:true})
    const data=new FormData()
        data.append('file',newFile)
        data.append('upload_preset','veera_images')
        const res= await fetch("https://api.cloudinary.com/v1_1/veera/image/upload",{
            method:"POST",
            body:data
        })
        const file= await res.json()
        const imageURL=file.secure_url;
        const info={url:imageURL}
        await newAppStore.profileUpdate(info,user_Info.id)
        await this.getUserInfo()
        await this.setState({updation_state:false})
  } 
  changeFirstName=async(text)=>{
    const {current_user}=newAppStore
   await this.setState({first_name:text})
      let str=text;
      let patt=/^[A-Za-z]{3,}$/
      let x=str.match(patt)
      if(x!==null){
        this.setState({first_name_border:false})
      }
      else{
        this.setState({first_name_border:true})
        this.state.first_name=current_user.First_Name
        this.state.first_name_border=false
      }
  }
  changeLastName=async(text)=>{
    const {current_user}=newAppStore
   await this.setState({last_name:text})
      let str=text;
      let patt=/^[A-Za-z]{3,}$/
      let x=str.match(patt)
      if(x!==null){
        this.setState({last_name_border:false})
      }
      else{
        this.setState({last_name_border:true})
        this.state.last_name=current_user.Last_Name
        this.state.last_name_border=false
      }
  }
  changeEmail=async(text)=>{
    const {current_user}=newAppStore
   await this.setState({email:text})
      let str=text;
      let patt=/^[A-Za-z0-9.\-]+@[A-Za-z0-9]+\.[A-Za-z\.]{2,5}$/
      let x=str.match(patt)
      if(x!==null){
        this.setState({email_border:false})
      }
      else{
        this.setState({email_border:true})
        this.state.email=current_user.Email
        this.state.email_border=false
      }
  }   
  changeUserName=async(text)=>{
    const {current_user}=newAppStore
   await this.setState({user_name:text})
      let str=text;
      let patt=/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*\W)/
      let x=str.match(patt)
      if(x!==null){
        this.setState({user_name_border:false})
      }
      else{
        this.setState({user_name_border:true})
        this.state.user_name=current_user.User_Name
        this.state.user_name_border=false
      }
  }   
  changePassword=async(text)=>{
    const {current_user}=newAppStore
   await this.setState({password:text})
      let str=text;
      let patt=/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.*[ \-\.\%\~])/
      let x=str.match(patt)
      if(x!==null){
        this.setState({password_border:false})
      }
      else{
        this.setState({password_border:true})
        this.state.password=current_user.Password
        this.state.password_border=false
      }
  }
render(){
    const {user_name_border,loading_state,first_name_border,last_name_border,email_border,password_border,user_Info,user_name_status,password_status,first_name_status,last_name_status,email_status,pass_status,log_out_status,image_path,updation_state,user_name,first_name,last_name,email,password}=this.state
    const {hitLogout}=newAppStore
    return(<ScrollView style={{flex:1,backgroundColor:"rgb(242, 253, 255)"}}>
        
    <View style={{height:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    {loading_state?<View style={{position:"absolute",top:200,zIndex:2,backgroundColor:"rgba(100, 100, 100, 0.5)"}}><Image
        style={{width:100,height:100,borderRadius:50,backgroundColor:"rgba(100, 100, 100, 0.5)"}}
        source={Load}
        /></View>:<Text></Text>}
    {this.state.update_status?
    <View style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",backgroundColor:"white",position:"absolute",top:200,width:300,height:200,borderWidth:1,zIndex:2}}>
            <Text style={{marginLeft:10}}>If Credientials which you enter does not exist Previous Values will be updated No worry!!</Text>
            <Text>Are Sure Want to Update!!</Text>
            <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around"}}>
            <TouchableOpacity 
          onPress={this.update}
      style={{width:"40%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"goldenrod",height:40,textAlign:"center",borderRadius:5}}>
          <Text>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity 
     onPress={this.clear}
      style={{width:"40%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"goldenrod",height:40,textAlign:"center",borderRadius:5}}>
          <Text>No</Text>
      </TouchableOpacity></View>
        </View>:<Text></Text>}
       {updation_state?<Image
        style={{width:100,height:100,borderRadius:50}}
        source={Load}
        />:<Image
        style={{height:100,width:100,borderRadius:50}}
        source={{uri:user_Info.url}}
        />}
        <Icon style={{marginTop:-25,marginRight:-65,backgroundColor:"white",borderRadius:50}} name="camera" onPress={this.handleImage} size={25}/>
        <Text style={{paddingTop:20}}>{user_Info.gender==="Male"?"Mr.":"Mrs."}{user_Info.First_Name + " "+ user_Info.Last_Name}</Text>
    </View>
    <View style={{height:395,display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
   <View style={{display:"flex",flexDirection:"row",marginBottom:-5}}>
    <Text style={{width:"56%"}}>First Name</Text>
    <Text style={{width:"40%"}}>Last Name</Text>
    </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        
        <View style={{borderColor:first_name_border?"red":"black",borderWidth:first_name_border?1:0,borderRadius:5,width:"45%",diplay:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"white"}}>
        
        <TextInput
        style={{width:"85%"}}
        value={first_name}
        onChangeText={this.changeFirstName}
        editable={first_name_status}
        ></TextInput>
        {first_name_status?<Text></Text>:<Icon name="create" size={20} onPress={()=>{
            this.setState({first_name_status:true,user_name_status:false,
                last_name_status:false,
                email_status:false,
                password_status:false})
        }}/>}
        </View>
        
        <View style={{borderColor:last_name_border?"red":"black",borderWidth:last_name_border?1:0,borderRadius:5,width:"45%",diplay:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"white"}}>

        <TextInput
        style={{width:"85%"}}
        value={last_name}
        onChangeText={this.changeLastName}
        editable={last_name_status}
        ></TextInput>
         {last_name_status?<Text></Text>:<Icon name="create" size={20} onPress={()=>{
            this.setState({last_name_status:true,user_name_status:false,
                first_name_status:false,
                email_status:false,
                password_status:false,})
        }}/>}
        </View>
        </View>
        <View style={{display:"flex",flexDirection:"row",marginTop:-3}}>
    {first_name_border?<Text style={{fontSize:8,color:"red"}}>Enter only alphabates greater 4 and lesser 20 </Text>:<Text style={{width:"55%"}}></Text>}
    {last_name_border?<Text style={{width:"56%",fontSize:8,color:"red"}}>Enter only alphabates greater 4 and lesser 20 </Text>:<Text></Text>}
    </View>

        <Text style={{marginBottom:-5}}>Email</Text>
        <View style={{borderColor:email_border?"red":"black",borderWidth:email_border?1:0,width:"100%",backgroundColor:"white",borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
    <TextInput
         style={{width:"90%"}}
         value={email}
         onChangeText={this.changeEmail}
         editable={email_status}
         >
    
         </TextInput>
         {email_status?<Text></Text>:<Icon name="create" size={20} onPress={()=>{
            this.setState({last_name_status:false,user_name_status:false,
                first_name_status:false,
                email_status:true,
                password_status:false,})
        }}/>}
        </View>
        {email_border?<Text style={{fontSize:8,color:"red",marginTop:-5}}>Enter Valid Mail Address @</Text>:<Text></Text>}
        <Text style={{marginBottom:-5}}>User Name</Text>
        <View style={{borderColor:user_name_border?"red":"black",borderWidth:user_name_border?1:0,width:"100%",backgroundColor:"white",borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
     <TextInput
        style={{width:"90%"}}
            value={user_name}
            onChangeText={this.changeUserName}
            editable={user_name_status}>
        </TextInput>
        {user_name_status?<Text></Text>:<Icon name="create" size={20} onPress={()=>{
            this.setState({last_name_status:false,user_name_status:true,
                first_name_status:false,
                email_status:false,
                password_status:false,})
        }}/>}
       </View>
       {user_name_border?<Text style={{fontSize:8,color:"red",marginTop:-5}}>Atleast 1 uppercase, 1 lowwecase, 1 digit but not any special charecters</Text>:<Text></Text>}
       <Text style={{marginBottom:-5}}>Password</Text>
        <View style={{borderColor:password_border?"red":"black",borderWidth:password_border?1:0,width:"100%",backgroundColor:"white",borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <TextInput
        onChangeText={this.changePassword}
        style={{width:"75%"}}
        secureTextEntry={pass_status}
        editable={password_status}
         value={password}>
             
        </TextInput>
        {password_status?<Icon onPress={this.show_hide} name={pass_status?"eye-off":"eye"} size={20}/>:<View style={{width:"20%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}><Icon onPress={this.show_hide} name={pass_status?"eye-off":"eye"} size={20}/><Icon name="create" size={20} onPress={()=>{
            this.setState({last_name_status:false,user_name_status:false,
                first_name_status:false,
                email_status:false,
                password_status:true,})
        }}/></View>}
        
        </View>
        {password_border?<Text style={{fontSize:8,color:"red",marginTop:-5}}>Atleast 1 uppercase, 1 lowwecase, 1 digit 1 special charecters Except[~,.,space]</Text>:<Text></Text>}
        <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around"}}>
      <TouchableOpacity 
      onPress={this.logout}
      style={{width:"40%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"goldenrod",height:40,textAlign:"center",borderRadius:5}}>
          {log_out_status?<Text >Signing Out...</Text>:<Text>Sign Out</Text>}
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={this.updateStatus}
      style={{width:"40%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"goldenrod",height:40,textAlign:"center",borderRadius:5}}>
          {this.state.update_status?<Text >Updating...</Text>:<Text>Update</Text>}
      </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    )
    
}
}
export default UserProfile
//