import React from "react"
import {TextInput, View,Text,Image,TouchableOpacity,ScrollView,Button} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import newAppStore from "./newStore";
class Community extends React.Component{
    state={

        list1:[],
        list2:[],
        list3:[],
        addStatus:false
    }
    componentDidMount(){
        // this.get_Item()
        this._unsubscribe=this.props.navigation.addListener('focus',()=>{
            this.getdata()
        });

        
}

componentWillUnmount(){
    this._unsubscribe()
}
addFriend=async(user)=>{
const{users_data,current_user}=newAppStore
let user_info={Name:current_user.First_Name+" "+current_user.Last_Name,Friends:current_user.Friends,Id:current_user.id}
let current_user_info;
let Send_Notifications=current_user.Send_Notifications
Send_Notifications.push(user)
users_data.forEach(async (each_user,index)=>{
    if(each_user.id==user.Id)
    {
        current_user_info=each_user.Notifications
    }
})
let notifications_data=await current_user_info
notifications_data.push(user_info)
await newAppStore.addFriend(notifications_data,Send_Notifications,user.Id)
await this.getdata()
}
getdata=async()=>{
    await newAppStore.setData()
    let data=[]
    const{users_data,current_user}=newAppStore
    let array=users_data;
    let newArray=[]
    array.forEach(user=>{
        if(user.id!=current_user.id)
        {
            newArray.push(user)
        }
    })
    let second_array=await current_user.Send_Notifications
    let third_array=await current_user.Friends
    await this.filtering(newArray,second_array,third_array)
    }
filtering=async(array,second_array,third_array)=>{
    let data=[]
    let data1=[]
    let data2=[]
await array.forEach(async user=>{
    let c=0;
    let info={Name:user.First_Name +" "+ user.Last_Name,Friends:user.Friends,Id:user.id}
    second_array.findIndex((element) => {
        if (element.Id == user.id) {
            data.push(info)
            // data2.push(info)
            c=1
        }
    })
     third_array.findIndex((element) => {
        if (element.Id == user.id) {
          data1.push(info)
          c=1
        }
    })
    if(c!==1)
    {
     data2.push(info)
    }
})
// array1=data
// second_array.forEach((user,index)=>{
//     const index_num = third_array.findIndex((element) => {
//         if (element.Id == user.Id) {
//           return true
//         }
//     })
//     if(index_num!=-1){
//         data1.splice(index,1)
//     }
// })

// array1.forEach((user,index)=>{
//     const index_num = third_array.findIndex((element) => {
//         if (element.Id == user.Id) {
//           return true
//         }
//     })
//     if(index_num!=-1){
//         data.splice(index,1)
//     }
// })
     await this.setState({list1:data,list2:data1,list3:data2})
    
}
cancelRequest=async(user)=>{
    const{current_user,users_data}=newAppStore
    // let user_notifications=current_user.Notifications
    let user_send_notifications=current_user.Send_Notifications
    let prev_user_notifications;
    // let prev_user_send_notifications;
    // let prev_user;
    users_data.forEach(async (each_user,index)=>{
        if(each_user.id==user.Id)
        {
             prev_user_notifications=each_user.Notifications;
            //  prev_user_send_notifications=each_user.Send_Notifications;
            
        }
    })
    let index1;
    user_send_notifications.forEach(async (each_user,index)=>{
        if(each_user.Id==user.Id)
        {
            index1=index
            // prev_user=each_user
        }
    })
    let index2
    prev_user_notifications.forEach(async (each_user,index)=>{
        if(each_user.Id==current_user.id)
        {
            index2=index
            // prev_user=each_user
        }
    })
    // let index=user_notifications.indexOf(user)
    // let index1=user_send_notifications.indexOf(user)
    // let index2=prev_user_notifications.indexOf(prev_user)
    // user_notifications.splice(index,1)
    // alert(index1)
    user_send_notifications.splice(index1,1)
    prev_user_notifications.splice(index2,1)
    // prev_user_send_notifications.splice(index3,1)
    await newAppStore.removeRequest(user_send_notifications,current_user.id,prev_user_notifications,user.Id)
    await this.getdata()
    // await this.setState({list:current_user.Send_Notifications,list1:current_user.Friends})
}

    render(){
      
        const{list1,list2,list3}=this.state
        
        return(
<View>
                <View style={{display:"flex",borderRadius:10,flexDirection:"row",alignItems:"center",borderWidth:1,borderColor:"gray",margin:10}}>
                    <Icon name="search" size={20}/>
                    <TextInput
                    style={{width:"80%"}}
                    placeholder="Search User..."
                    
                    />
                </View>
            <ScrollView style={{marginBottom:70}}>
                <TouchableOpacity style={{height:30,backgroundColor:"gray",display:"flex",justifyContent:"center"}}>
                <Text>Request Sent Data</Text>
                </TouchableOpacity>
                
            {list1.map(i=>(
            <View style={{margin:10,elevation:7,backgroundColor:"#ebebe0",borderWidth:1,borderRadius:10,borderColor:"#ebebe0"}} key={i.Id}>
            <View style={{display:"flex",flexDirection:"row",height:80}}>
                <View style={{width:"20%",borderTopLeftRadius:10,borderBottomLeftRadius:10,borderColor:"gray",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Image
                    style={{width:60,height:60,borderRadius:90,alignSelf:"center",marginTop:5}}
                    source={{uri:"https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"}}
                    />
                </View>
                <View style={{width:"60%",display:"flex",flexDirection:"column",justifyContent:"space-around",borderColor:"gray"}}>
                    <View style={{display:"flex",flexDirection:"row"}}>
                    <Text style={{fontWeight:"bold"}}>Name: </Text>
                    <Text >{i.Name}</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Icon name="people" size={20}/>
                    <Text>{i.Friends.length}Followers</Text>
                    </View>
                    <Icon name="ellipsis-horizontal-circle" size={20}/>
                    </View>
                </View>
                <View style={{width:"20%",display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,borderColor:"gray"}}>
                    <TouchableOpacity
                    
                    style={{borderWidth:1,width:"90%",height:25,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#003300",borderRadius:3}}>
                        <Text style={{fontSize:10,color:"white"}}>requested</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.cancelRequest(i)}
                    style={{borderWidth:1,width:"90%",height:25,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#003300",borderRadius:3}}>
                        <Text style={{fontSize:10,color:"white"}}>Cancel</Text>
                    </TouchableOpacity>
                </View>
        </View></View>
        ))
        }





<TouchableOpacity style={{height:30,backgroundColor:"gray",display:"flex",justifyContent:"center"}}>
                <Text>Friends</Text>
                </TouchableOpacity>
                
            {list2.map(i=>(
            <View style={{margin:10,elevation:7,backgroundColor:"#ebebe0",borderWidth:1,borderRadius:10,borderColor:"#ebebe0"}} key={i.Id}>
            <View style={{display:"flex",flexDirection:"row",height:80}}>
                <View style={{width:"20%",borderTopLeftRadius:10,borderBottomLeftRadius:10,borderColor:"gray",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Image
                    style={{width:60,height:60,borderRadius:90,alignSelf:"center",marginTop:5}}
                    source={{uri:"https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"}}
                    />
                </View>
                <View style={{width:"60%",display:"flex",flexDirection:"column",justifyContent:"space-around",borderColor:"gray"}}>
                    <View style={{display:"flex",flexDirection:"row"}}>
                    <Text style={{fontWeight:"bold"}}>Name: </Text>
                    <Text >{i.Name}</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Icon name="people" size={20}/>
                    <Text>{i.Friends.length}Followers</Text>
                    </View>
                    <Icon name="ellipsis-horizontal-circle" size={20}/>
                    </View>
                </View>
                <View style={{width:"20%",display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,borderColor:"gray"}}>
                    <TouchableOpacity
                    
                    style={{borderWidth:1,width:"90%",height:25,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#003300",borderRadius:3}}>
                        <Text style={{fontSize:10,color:"white"}}>Friends</Text>
                    </TouchableOpacity>
                </View>
        </View></View>
        ))
        }




<TouchableOpacity style={{height:30,backgroundColor:"gray",display:"flex",justifyContent:"center"}}>
                <Text>Suggestions</Text>
                </TouchableOpacity>
                
            {list3.map(i=>(
            <View style={{margin:10,elevation:7,backgroundColor:"#ebebe0",borderWidth:1,borderRadius:10,borderColor:"#ebebe0"}} key={i.Id}>
            <View style={{display:"flex",flexDirection:"row",height:80}}>
                <View style={{width:"20%",borderTopLeftRadius:10,borderBottomLeftRadius:10,borderColor:"gray",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Image
                    style={{width:60,height:60,borderRadius:90,alignSelf:"center",marginTop:5}}
                    source={{uri:"https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"}}
                    />
                </View>
                <View style={{width:"60%",display:"flex",flexDirection:"column",justifyContent:"space-around",borderColor:"gray"}}>
                    <View style={{display:"flex",flexDirection:"row"}}>
                    <Text style={{fontWeight:"bold"}}>Name: </Text>
                    <Text >{i.Name}</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Icon name="people" size={20}/>
                    <Text>{i.Friends.length} Followers</Text>
                    </View>
                    <Icon name="ellipsis-horizontal-circle" size={20}/>
                    </View>
                </View>
                <View style={{width:"20%",display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,borderColor:"gray"}}>
                    <TouchableOpacity 
                  onPress={()=>this.addFriend(i)}                
                  style={{borderWidth:1,width:"90%",height:25,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#e6e6e6",borderRadius:3}}>
                        <Text style={{fontSize:10}}>Add Friend</Text>
                    </TouchableOpacity>
                </View>
        </View></View>
        ))
        }


        </ScrollView>
        </View>
        )
    }
}
export default Community