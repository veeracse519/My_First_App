import React from "react"
import { View,Text,Image,TouchableOpacity,ScrollView,TextInput } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import newAppStore from "./newStore";
class Notifications extends React.Component{
    state={

        list:[],
        list1:[]
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
    getdata=async()=>{
        await newAppStore.setData()
        const{current_user,users_data}=newAppStore
        // alert(current_user.Notifications.length)
        let notifications=current_user.Notifications
        let friends=current_user.Friends
        current_user.Notifications.forEach((user,index)=>{
            users_data.forEach(user1=>{
                   if(user.Id==user1.id){
                       notifications[index]["Friends_count"]=user1.Friends.length
                   }
            })
        })
        current_user.Friends.forEach((user,index)=>{
            users_data.forEach(user1=>{
                   if(user.Id==user1.id){
                    friends[index]["Friends_count"]=user1.Friends.length
                   }
            })
        })
        await this.setState({list:notifications,list1:friends})
    }
    filtering=(user)=>{
       let current_user=user
    //    let array=current_user.
    }
    sentData=async(user)=>{
        const{current_user,users_data}=newAppStore
        let user_notifications=current_user.Notifications
        let user_send_notifications=current_user.Send_Notifications
        let user_friends=current_user.Friends
        let prev_user_notifications;
        let prev_user_send_notifications;
        let prev_user_friends;
        let prev_user=null;
        users_data.forEach(async (each_user,index)=>{
            if(each_user.id==user.Id)
            {
                 prev_user_notifications=each_user.Notifications;
                 prev_user_send_notifications=each_user.Send_Notifications;
                 prev_user_friends=each_user.Friends;
                
            }
        })
        let index3;
        prev_user_send_notifications.forEach(async (each_user,index)=>{
            if(each_user.Id==current_user.id)
            {
                index3=index
                prev_user=each_user
            }
        })
        let index=user_notifications.indexOf(user)
        let index1=user_send_notifications.indexOf(user)
        let index2=prev_user_notifications.indexOf(prev_user)
        user_notifications.splice(index,1)
        user_send_notifications.splice(index1,1)
        prev_user_notifications.splice(index2,1)
        prev_user_send_notifications.splice(index3,1)
        user_friends.push(user)
        prev_user_friends.push(prev_user)
       await newAppStore.addFriendData(user_notifications,user_send_notifications,user_friends,current_user.id,prev_user_notifications,prev_user_send_notifications,prev_user_friends,user.Id)
     await this.getdata()
       // await this.setState({list:current_user.Notifications,list1:current_user.Friends})
    //     let user_info={Name:current_user.First_Name+" "+current_user.Last_Name,Friends:current_user.Friends,Id:current_user.id}
    //     let notifications_data=current_user.Notifications
    //     let index=notifications_data.indexOf(user)
    //     notifications_data.splice(index,1)
    //     let current_user_info;
    //     users_data.forEach( async each_user=>{
    //         if(each_user.id==user.Id){
    //             current_user_info=each_user
    //         }
    //     })
    //     let current_user_friends=await current_user_info.Friends
    //     let current_user_notifications=await current_user_info.Notifications
    //     let current_user_send_notifications=await current_user_info.Send_Notifications
    //     let index1=current_user_notifications.indexOf(user_info)
    //     let index2=current_user_send_notifications.indexOf(user_info)
    //     current_user_notifications.splice(index1,1)
    //     current_user_send_notifications.splice(index2,1)
    //     current_user_friends.push(user_info)
    //    await newAppStore.addFriendData(notifications_data,user,current_user.id,current_user_friends,current_user_notifications,user.Id)
    //    await this.setState({list:current_user.Notifications,list1:current_user.Friends})
    }
  removeData=async(user)=>{
    const{current_user,users_data}=newAppStore
    let user_notifications=current_user.Notifications
    let user_send_notifications=current_user.Send_Notifications
    let prev_user_notifications;
    let prev_user_send_notifications;
    let prev_user=null;
    users_data.forEach(async (each_user,index)=>{
        if(each_user.id==user.Id)
        {
             prev_user_notifications=each_user.Notifications;
             prev_user_send_notifications=each_user.Send_Notifications;
            
        }
    })
    let index3;
    prev_user_send_notifications.forEach(async (each_user,index)=>{
        if(each_user.Id==current_user.id)
        {
            index3=index
            prev_user=each_user
        }
    })
    let index=user_notifications.indexOf(user)
    let index1=user_send_notifications.indexOf(user)
    let index2=prev_user_notifications.indexOf(prev_user)
    user_notifications.splice(index,1)
    user_send_notifications.splice(index1,1)
    prev_user_notifications.splice(index2,1)
    prev_user_send_notifications.splice(index3,1)
    await newAppStore.removeData(user_notifications,user_send_notifications,current_user.id,prev_user_notifications,prev_user_send_notifications,user.Id)
    await this.getdata()
    //await this.setState({list:current_user.Notifications,list1:current_user.Friends})

}
blockData=async(user)=>{
    const{current_user,users_data}=newAppStore
    let user_notifications=current_user.Friends
    let prev_user_friends;
    users_data.forEach(async (each_user,index)=>{
        if(each_user.id==user.Id)
        {
             prev_user_friends=each_user.Friends
            
        }
    })
    let index1;
    prev_user_friends.forEach(async (each_user,index)=>{
        if(each_user.Id==current_user.id)
        {
            index1=index
        }
    })
    let index=user_notifications.indexOf(user)
    user_notifications.splice(index,1)
    prev_user_friends.splice(index1,1)
    await newAppStore.removeFriend(user_notifications,current_user.id,prev_user_friends,user.Id)
    await this.getdata()
    //await this.setState({list:current_user.Notifications,list1:current_user.Friends})

}
    render(){
        const{list,list1}=this.state
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
                <Text>Suggestions</Text>
                </TouchableOpacity>
                
            {list.map(i=>(
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
                    <Text>{i.Friends_count} Followers</Text>
                    </View>
                    <Icon name="ellipsis-horizontal-circle" size={20}/>
                    </View>
                </View>
                <View style={{width:"20%",display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,borderColor:"gray"}}>
                    <TouchableOpacity 
                    onPress={()=>this.sentData(i)}
                    style={{borderWidth:1,width:"90%",height:25,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#003300",borderRadius:3}}>
                        <Text style={{fontSize:10,color:"white"}}>Respond</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.removeData(i)}
                    style={{borderWidth:1,width:"90%",height:25,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#e60000",borderRadius:3}}>
                        <Text style={{fontSize:10,color:"white"}}>Remove</Text>
                    </TouchableOpacity>
                </View>
        </View></View>
        ))
        }

<TouchableOpacity style={{height:30,backgroundColor:"gray",display:"flex",justifyContent:"center"}}>
                <Text>Friends</Text>
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
                    <Text>{i.Friends_count} Followers</Text>
                    </View>
                    <Icon name="ellipsis-horizontal-circle" size={20}/>
                    </View>
                </View>
                <View style={{width:"20%",display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,borderColor:"gray"}}>
                    <TouchableOpacity style={{borderWidth:1,width:"90%",height:25,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#e6e6e6",borderRadius:3}}>
                        <Text style={{fontSize:10}}>Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.blockData(i)}
                    style={{borderWidth:1,width:"90%",height:25,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#e6e6e6",borderRadius:3}}>
                        <Text style={{fontSize:10}}>Block</Text>
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
export default Notifications