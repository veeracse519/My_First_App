import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput,ScrollView,Button,Image } from "react-native";
import newAppStore from "./newStore";
// import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
//import { green100 } from "react-native-paper/lib/typescript/styles/colors";
class ProfileScreen extends Component {
  state={
    first_name:"",
    last_name:"",
    user_name:"",
    email:"",
    password:"",
    re_pass:"",
    Mmale:"None",
    Fmale:"None",
    show:true,
    user_reg:null,
    pass_reg:null,
    re_pass_reg:null,
    email_reg:null,
    last_reg:null,
    first_reg:null,
    gender_reg:null,
  }
  signUp=async()=>{
   const{first_reg,last_reg,user_reg,email_reg,gender_reg,pass_reg,re_pass_reg,Mmale,Fmale,first_name,last_name,email,user_name,password}=this.state
   const{navigation}=this.props
   const {hitSignUp,status1}=newAppStore
   if(first_reg===null || first_reg===false)
   {
     await this.setState({first_reg:false})
     
   }
   if(last_reg===null || last_reg===false)
   {
     await this.setState({last_reg:false})
     
   }
   if(email_reg===null || email_reg===false)
   {
     await this.setState({email_reg:false})
     
   }
    if(gender_reg===null || gender_reg===false)
   {
     await this.setState({gender_reg:false})
     
   }
    if(user_reg===null || user_reg===false)
   {
     await this.setState({user_reg:false})
     
   }
    if(pass_reg===null || pass_reg===false)
   {
     await this.setState({pass_reg:false})
     
   }
    if(re_pass_reg===null || re_pass_reg===false)
   {
     await this.setState({re_pass_reg:false})
     
   }
   else if(first_reg && last_reg && email_reg && gender_reg && user_reg && pass_reg && re_pass_reg) {
    let imageIS;
    let gender;
    if(Mmale==="Male"){
      gender="Male"
imageIS="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"
    }
    else{
      gender="Female"
imageIS="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg"
    }
    await this.setState({show:false})
    const data={url:imageIS,First_Name:first_name,Last_Name:last_name,Gender:gender,User_Name:user_name,Email:email,Password:password,Cart_Details:{
       No_Of_Cart_Items:0,
       Cart_List:[]
     },
     Friends:[],
     Online_Status:false,
     Notifications:[]
    }
     let status_code=await hitSignUp(data)
     if(status_code===201){

       alert("SuccessFully Registered")
          navigation.navigate("Home")      
     }
     else{
       this.setState({show:false,first_name:"",last_name:"",user_name:"",email:"",password:"",re_pass:""})
     }
   }

  }
  selectMale=()=>{
    const{Mmale,Fmale}=this.state
     this.setState({Mmale:"Male",Fmale:"None",gender_reg:true})
  }
  selectFemale=()=>{
    const{Mmale,Fmale}=this.state
     this.setState({Mmale:"None",Fmale:"Female",gender_reg:true})
  }
  changeUserName=async(text)=>{
    await this.setState({user_name:text})
    let str=text;
    let patt=/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*\W)/
    let x=str.match(patt)
    if(x!==null){
      await this.setState({user_reg:true})
    }
    else if(text.length!=0){
      await this.setState({user_reg:false})
    }
    else{
      await this.setState({user_reg:null})
    }
    // alert(this.state.user_reg)
    
  }
  changePassword=async(text)=>{
    await this.setState({password:text})
    let str=text;
    let patt=/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.*[ \-\.\%\~])/
    let x=str.match(patt)
    if(x!==null){
      await this.setState({pass_reg:true})
    }
    else if(text.length!==0){
      await this.setState({pass_reg:false})
    }
    else{
      await this.setState({pass_reg:null})
    }
  }
  matchPass=async(text)=>{
    const{password,pass_reg}=this.state
    await this.setState({re_pass:text})
    let str=text;
    // let patt=/^[A-Z]+[a-z]+\W[0-9]+$/
    // let x=str.match(patt)
    if(pass_reg && str.length>0 && str===password){
      await this.setState({re_pass_reg:true})
    }
    else if(str.length!==0){
      await this.setState({re_pass_reg:false})
    }
    else{
      await this.setState({re_pass_reg:null})
    }
  }
  
  onChangeEmail=async(text)=>{
    await this.setState({email:text})
    let str=text;
    let patt=/^[A-Za-z0-9.\-]+@[A-Za-z0-9]+\.[A-Za-z\.]{2,5}$/
    let x=str.match(patt)
    if(x!==null){
      await this.setState({email_reg:true})
    }
    else if(text.length!==0){
      await this.setState({email_reg:false})
    }
    else{
      await this.setState({email_reg:null})
    }
  }
  onChangeLastName=async(text)=>{
   await this.setState({last_name:text})
   let str=text;
    let patt=/^[A-Za-z]{3,}$/
    let x=str.match(patt)
    if(x!==null){
      await this.setState({last_reg:true})
    }
    else if(text.length!==0){
      await this.setState({last_reg:false})
    }
    else{
      await this.setState({last_reg:null})
    }

  }
  onChangeFirstName=async(text)=>{
    await this.setState({first_name:text})
    let str=text;
     let patt=/^[A-Za-z]{4,20}$/
     let x=str.match(patt)
     if(x!==null){
       await this.setState({first_reg:true})
     }
     else if(text.length!==0){
       await this.setState({first_reg:false})
     }
     else{
       await this.setState({first_reg:null})
     }
 
  }
  goToHome=()=>{
    const{navigation}=this.props
    navigation.navigate("Home")
  }
  render() {
    const{user_show_credits,gender_reg,last_reg,first_reg,email_reg,user_reg,pass_reg,re_pass_reg,imageUri,show,imageState,Mmale,Fmale,first_name,last_name,user_name,email,password,re_pass}=this.state
    return (
      
     <ScrollView>
     <View style={styles.container}>
  
     <View style={{width:"100%",display:"flex",flexDirection:"column"}}>
     
     <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
     <Text style={{fontSize:15,fontWeight:"bold",width:"28%"}}>First Name:</Text>
    <View style={{borderRadius:3,
      width:"72%",
      height:40,
      borderWidth:1,
     borderColor:first_reg!==null?first_reg?"green":"red":"black",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"}}>
     <TextInput
    //  style={styles.userBox}
     placeholder="Enter First Name"
     onChangeText={this.onChangeFirstName}
     value={first_name}
     />
     {first_reg!==null?first_reg?<Icon name="checkmark-circle" color="green" size={35}/>:<Icon name="alert-circle" color="red" size={35}/>:<Text></Text>}
    
     </View>
    </View>
    <View style={{display:"flex",flexDirection:"row"}}>
       <View style={{width:"28%"}}></View>
     {first_reg!==null?first_reg?<Text style={{fontSize:8,color:"green"}}>Excellent</Text>:<Text style={{fontSize:8,color:"red"}}>Enter only alphabates Must greater 4 and lesser 20 </Text>:<Text style={{width:"72%",fontSize:8,color:"black"}}>Enter only alphabates  Must greater 4 and lesser 20 </Text>}
     </View>
     </View>




     <View style={{width:"100%",display:"flex",flexDirection:"column"}}>
     
     <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
     <Text style={{fontSize:15,fontWeight:"bold",width:"28%"}}>Last Name:</Text>
    <View style={{borderRadius:3,
      width:"72%",
      height:40,
      borderWidth:1,
     borderColor:last_reg!==null?last_reg?"green":"red":"black",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"}}>
     <TextInput
     
     placeholder="Enter Last Name"
     onChangeText={this.onChangeLastName}
     value={last_name}
     />
     {last_reg!==null?last_reg?<Icon name="checkmark-circle" color="green" size={35}/>:<Icon name="alert-circle" color="red" size={35}/>:<Text></Text>}
     </View>
     </View>
     <View style={{display:"flex",flexDirection:"row"}}>
       <View style={{width:"28%"}}></View>
     {last_reg!==null?last_reg?<Text style={{fontSize:8,color:"green"}}>Excellent</Text>:<Text style={{fontSize:8,color:"red"}}>Enter only alphabates</Text>:<Text style={{width:"72%",fontSize:8,color:"black"}}>Enter only alphabates</Text>}
     </View>
     </View>




     <View style={{width:"100%",display:"flex",flexDirection:"column"}}>
     
     <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
     <Text style={{fontSize:15,fontWeight:"bold",width:"28%"}}>E-Mail:</Text>
    <View style={{borderRadius:3,
      width:"72%",
      height:40,
      borderWidth:1,
     borderColor:email_reg!==null?email_reg?"green":"red":"black",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"}}>
     <TextInput
     
     placeholder="Enter @Mail"
     onChangeText={this.onChangeEmail}
     value={email}
     />
    {email_reg!==null?email_reg?<Icon name="checkmark-circle" color="green" size={35}/>:<Icon name="alert-circle" color="red" size={35}/>:<Text></Text>}
   
     </View>
     </View>
     <View style={{display:"flex",flexDirection:"row"}}>
       <View style={{width:"28%"}}></View>
     {email_reg!==null?email_reg?<Text style={{fontSize:8,color:"green"}}>Excellent</Text>:<Text style={{fontSize:8,color:"red"}}>Enter Valid Mail Address @</Text>:<Text style={{width:"72%",fontSize:8,color:"black"}}>Enter Valid Mail Address @</Text>}
     </View>
</View>




     
<View style={{width:"100%",display:"flex",flexDirection:"column"}}>
     
     <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
     <Text style={{fontSize:15,fontWeight:"bold",width:"28%"}}>Gender:</Text>
      <View style={{borderRadius:3,
      width:"72%",
      height:40,
      borderWidth:1,
     borderColor:gender_reg!==null?gender_reg?"green":"red":"black",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"}}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Icon name={Mmale==="Male"?"man":"man-outline"} size={25} onPress={this.selectMale}/>
        <Text style={{fontSize:20}}>Male</Text>
        </View>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        
        <Icon name={Fmale==="Female"?"woman":"woman-outline"}  size={25} onPress={this.selectFemale}/>
        <Text style={{fontSize:20}}>Female</Text>
        
      </View>
      {gender_reg!==null?gender_reg?<Icon name="checkmark-circle" color="green" size={35}/>:<Icon name="alert-circle" color="red" size={35}/>:<Text></Text>}
   
      </View>   
</View>
<View style={{display:"flex",flexDirection:"row"}}>
       <View style={{width:"28%"}}></View>
     {gender_reg!==null?gender_reg?<Text style={{fontSize:8,color:"green"}}>Excellent</Text>:<Text style={{fontSize:8,color:"red"}}>Must select any one of them</Text>:<Text style={{width:"72%",fontSize:8,color:"black"}}>Must select any one of them</Text>}
     </View>

      </View>

















      <View style={{width:"100%",display:"flex",flexDirection:"column"}}>
        <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
     <Text style={{fontSize:15,fontWeight:"bold",width:"28%"}}>User Name:</Text>
     
      <View style={{borderRadius:3,
      width:"72%",
      height:40,
      borderWidth:1,
     borderColor:user_reg!==null?user_reg?"green":"red":"black",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"}}>
     <TextInput
     
     placeholder="Enter UserName"
     onChangeText={this.changeUserName}
     //(text)=>this.setState({user_name:text})
     value={user_name}
     />
   {user_reg!==null?user_reg?<Icon name="checkmark-circle" color="green" size={35}/>:<Icon name="alert-circle" color="red" size={35}/>:<Text></Text>}
     
     </View>
     </View>
     <View style={{display:"flex",flexDirection:"row"}}>
       <View style={{width:"28%"}}></View>
       {user_reg!==null?user_reg?<Text style={{fontSize:8,color:"green"}}>Excellent__</Text>:<Text style={{fontSize:8,color:"red"}}>Atleast 1 uppercase, 1 lowwecase, 1 digit but not any special charecters</Text>:<Text style={{fontSize:8,color:"black"}}>Atleast 1 uppercase, 1 lowwecase, 1 digit but not any special charecters</Text>}
    </View>
     </View>
     <View style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      
     <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
     <Text style={{fontSize:15,fontWeight:"bold",width:"28%"}}>Password:</Text>
     
     <View style={{borderRadius:3,
      width:"72%",
      height:40,
      borderWidth:1,
     borderColor:pass_reg!==null?pass_reg?"green":"red":"black",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"}}>
     <TextInput
    //  style={styles.userBox}
     placeholder="Enter Password"
     secureTextEntry={true}
     onChangeText={this.changePassword}
     //(text)=>this.setState({password:text})
     value={password}
     />
       {pass_reg!==null?pass_reg?<Icon name="checkmark-circle" color="green" size={35}/>:<Icon name="alert-circle" color="red" size={35}/>:<Text></Text>}
     </View>
     </View>
     <View style={{display:"flex",flexDirection:"row"}}>
       <View style={{width:"28%"}}></View>
     {pass_reg!==null?pass_reg?<Text style={{fontSize:8,color:"green"}}>Excellent</Text>:<Text style={{width:"75%",fontSize:8,color:"red"}}>Atleast 1 uppercase, 1 lowwecase, 1 digit 1 special charecters Except[~,.,space]</Text>:<Text style={{width:"75%",fontSize:8,color:"black"}}>Atleast 1 uppercase, 1 lowwecase, 1 digit, 1 special charecters Except[~,.,space]</Text>}
     </View>
     {/* <Icon name="alert-circle" size={35}/> */}
       </View>
       <View style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
   
       <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
     <Text style={{fontSize:15,fontWeight:"bold",width:"28%"}}>Re-Password:</Text>
     
     <View style={{borderRadius:3,
      width:"72%",
      height:40,
      borderWidth:1,
     borderColor:re_pass_reg!==null?re_pass_reg?"green":"red":"black",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"}}>
     <TextInput
    //  style={styles.userBox}
     placeholder="Re-Enter Password"
     secureTextEntry={true}
     onChangeText={this.matchPass}
     //(text)=>this.setState({re_pass:text})
     value={re_pass}
     />
       {re_pass_reg!==null?re_pass_reg?<Icon name="checkmark-circle" color="green" size={35}/>:<Icon name="alert-circle" color="red" size={35}/>:<Text></Text>}
 </View>
 
 
 {/* <Icon name="alert-circle" size={35}/> */}
     </View>
     <View style={{display:"flex",flexDirection:"row"}}>
       <View style={{width:"28%"}}></View>
     {re_pass_reg!==null?re_pass_reg?<Text style={{fontSize:8,color:"green"}}>Excellent</Text>:<Text style={{fontSize:8,color:"red"}}>Must Match With above Password</Text>:<Text style={{width:"72%",fontSize:8,color:"black"}}>Must Match With above Password</Text>}
     </View>
   </View>
     {/* <Button title="Sign Up" disabled={!show} onPress={this.signUp}/> */}
    <View style={{display:"flex",flexDirection:"column",height:70,justifyContent:"space-around"}}>
     <TouchableOpacity 
      disabled={!show} onPress={this.signUp}
      style={{backgroundColor:"red",height:30,borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <Text style={{color:"white"}}>Sign Up</Text>
      </TouchableOpacity>
     <TouchableOpacity style={{borderColor:"indigo"}} onPress={this.goToHome}>
       <Text style={{color:"indigo",borderBottomWidth:1}}>Already have an accouunt?</Text>
     </TouchableOpacity>
     </View>
     </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:650,
    display:"flex",
    flexDirection:"column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    
  },
  userBox: {
    borderRadius:3,
      width:"72%",
      height:40,
      borderWidth:1,
      // borderColor:ProfileScreen.state.user_reg?"green":"red",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  }
});
export default ProfileScreen