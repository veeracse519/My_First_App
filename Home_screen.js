
import React from "react"
import { TouchableOpacity } from "react-native";

import {View,Text,StyleSheet,TextInput,Image,ScrollView,Button,BackHandler} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import Content from "./drawer";
import Home from "./Home";
import { createDrawerNavigator } from '@react-navigation/drawer';
import newAppStore from "./newStore";
class HomeScreen extends React.Component{
    state={
        Items_List:[],
        selected_Size:[],
        select_size:null,
        Items_Another_List:[],
        id:null,
        added_id:null,
        selected_page:true,
        loading:true
    }
    count=100
    componentDidMount(){
        // this.backHandler=BackHandler.addEventListener("hardwareBackPress",this.backOption)
        this.getData()
    }
    // backOption=()=>{
    //     alert(1)
    // }
    getData=async()=>{
        const {items_data}=newAppStore
        // await newAppStore.setData()

  await this.setState({Items_List:items_data,loading:false})
    }
    single_item_Select=async(item_id)=>{
       await newAppStore.selected_item(item_id)
        const{navigation}=this.props
            navigation.navigate("Item")
    }
    styles=StyleSheet.create({
        search:{
            backgroundColor:"white",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            marginLeft:10,
            marginRight:10,
            marginTop:10,
            borderRadius:5
        },
       
        main:{
            backgroundColor:'rgb(242, 253, 255)',
            marginBottom:105
          
        }
    })
    inc_Dec=async()=>{
        let normal_array=this.state.Items_List
        let update_array=await newAppStore.inc_Dec(normal_array)
        this.setState({Items_List:update_array})
    }
    dec_Inc=async()=>{
        let normal_array=this.state.Items_List
        let update_array=await newAppStore.dec_Inc(normal_array)
        this.setState({Items_List:update_array})
    }
    goToItemPage=async(e)=>{
       
        await newAppStore.products_In_Cart(e)
        await this.setState({added_id:e})
        // this.props.cart_length()
         setTimeout(()=>{
            this.props.cart_length()
            this.setState({added_id:null})
            
        },700)
        // await this.setState({added_id:null})
    }
render(){
    
    const {Items_List,id,selected_Size,added_id,select_size,Items_Another_List,loading}=this.state
   
    return(
        
        <View style={this.styles.main}>
            <View style={this.styles.search}>
     
            <Icon name="ellipsis-vertical" size={30} onPress={() => this.props.navigation.openDrawer()} />
     <Icon name="search-outline" size={25}/>
      <TextInput
  placeholder="Search Any Thing Here..."
  onChangeText={
      async(text)=>{
          let updated_array= await newAppStore.search(text)
          this.setState({Items_List:updated_array})
      }
  }
   />
    </View>

    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:10,marginBottom:10}}>
    <TouchableOpacity style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"white",height:25,width:50,borderRadius:5}}
    onPress={this.inc_Dec}
    >
    <Text style={{fontWeight:"bold",fontSize:20}}>A<Icon name="arrow-forward" size={20}/>Z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"white",height:25,width:50,borderRadius:5}}
        onPress={this.dec_Inc}
        >
        <Text style={{fontWeight:"bold",fontSize:20}}>Z<Icon name="arrow-forward" size={20}/>A</Text>
        </TouchableOpacity>
    </View>        
        {/* {loading?<Text>Loading..</Text>: */}
        <ScrollView >
      <View style={{borderBottom:10}}> 
     
  {Items_List.length!=0?<View style={{display:"flex",flexDirection:"row",flexWrap:'wrap',justifyContent:"space-around",marginTop:10}}>
       {
       Items_List.map(item=>(
 
 <TouchableOpacity key={item.id} style={{margin:3,display:"flex",flexDirection:"column",height:300,width:170,elevation:7,justifyContent:"space-around",alignItems:"center",backgroundColor:"white"}} onPress={()=>this.single_item_Select(item.id)}>
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",position:"absolute",bottom:45,right:25,zIndex:1}}>
                  {item.id==added_id?<Text style={{color:"#fff",paddingTop:4,width:120,height:30,fontSize:15,backgroundColor:"#555",textAlign:"center",borderRadius:5}}>Added to cart</Text>
                   :<Text></Text>}
                   </View>

                    {item.isFreeShipping?<View style={{position:"absolute",top:10,right:0,zIndex:1}}>
                        <Text style={{fontStyle:"italic",fontSize:20}}>Free <Icon name="bicycle" size={30}/></Text>
                        </View>:<View style={{position:"absolute",top:10,right:0,zIndex:1}}></View>}
         
                <Image 
                
                style={{height:140,width:140,borderRadius:5}}
                source={{uri:item.image}}
               >
               
               </Image>
              
               <Text style={{textAlign:"center"}}>{item.title}</Text>
               <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                   <Text style={{fontWeight:"bold",fontSize:20}}>{item.price}</Text>
                   <Text style={{fontWeight:"bold",fontSize:20}}>{item.currencyFormat}</Text>
                </View>
                <TouchableOpacity style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"goldenrod",width:150,height:30,padding:3,borderRadius:5}}
                //  disabled={item.id==added_id?true:false}
                onPress={()=>this.goToItemPage(item.id)}
                >
                  <Text style={{color:"black"}}>Add Cart</Text> 
                    </TouchableOpacity>
        
               
           </TouchableOpacity>
       ))
    }
    </View>:<View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:600}}>
        <Text style={{color:"white",fontWeight:"900"}}>No Data Found</Text>
        <Text style={{color:"white",fontWeight:"900"}}>Please Go To search...</Text>
        </View>}
        </View>
   
    </ScrollView>
    
    </View>
)
    
}

}
const Drawer=createDrawerNavigator()
export default HomeScreen
