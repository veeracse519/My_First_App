
import React from "react"
import { TouchableOpacity } from "react-native";

import {View,Text,StyleSheet,TextInput,Image,ScrollView,Button,BackHandler} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import newAppStore from "./newStore";
class HomeScreen1 extends React.Component{
    state={
        Items_List:[],
        selected_Size:[],
        select_size:null,
        Items_Another_List:[],
        id:null,
        selected_page:true,
    }
    count=100
    // componentDidMount(){
    //     this.getData()
    // }
//     getData=async()=>{
//         const {remain_data}=newAppStore
//   await this.setState({Items_List:remain_data})
//     }
    // single_item_Select=async(item_id)=>{
    //     alert(item_id)
    //    await newAppStore.selected_item(item_id)
    //     const{navigation}=this.props
    //         navigation.navigate("Item1")
    // }
    styles=StyleSheet.create({
        search:{
            backgroundColor:"white",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            marginLeft:10,
            marginRight:10,
            marginTop:10
        },
       
        main:{
            backgroundColor:'rgb(242, 245, 245)',
        }
    })
    // inc_Dec=async()=>{
    //     let normal_array=this.state.Items_List
    //     let update_array=await newAppStore.inc_Dec(normal_array)
    //     this.setState({Items_List:update_array})
    // }
    // dec_Inc=async()=>{
    //     let normal_array=this.state.Items_List
    //     let update_array=await newAppStore.dec_Inc(normal_array)
    //     this.setState({Items_List:update_array})
    // }
    // goToItemPage=(e)=>{
    //     newAppStore.products_In_Cart(e)
    // }
render(){
    
    const {Items_data,single_item_Select,goToItemPage,added_id_is}=this.props
   let c=0
    return(
        
       <ScrollView style={this.styles.main}>
           
      <View>
          <Text style={{fontSize:20,fontWeight:"bold"}}>Similar Items</Text>
      {Items_data.length!=0?<View style={{display:"flex",flexDirection:"row",flexWrap:'wrap',margin:3}}>
       {
       Items_data.map(item=>(
           <TouchableOpacity key={c++} style={{margin:3,display:"flex",flexDirection:"column",height:300,width:170,elevation:7,justifyContent:"space-around",alignItems:"center",backgroundColor:"white"}} onPress={()=>single_item_Select(item.id)}>
                    
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",position:"absolute",bottom:45,right:25,zIndex:1}}>
                  {item.id==added_id_is?<Text style={{color:"#fff",paddingTop:4,width:120,height:30,fontSize:15,backgroundColor:"#555",textAlign:"center",borderRadius:5}}>Added to cart</Text>
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
               
                onPress={()=>goToItemPage(item.id)}
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
     )
    
}

}

export default HomeScreen1
