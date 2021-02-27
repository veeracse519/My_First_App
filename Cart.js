import React from "react"
import {View,Text,TouchableOpacity,ScrollView,Image,Button} from "react-native"
// import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import newAppStore from "./newStore"
class Cart extends React.Component{
    state={
        cart_items:[]
    }
    componentDidMount(){
        this.getCartList()
        
    }
    getCartList=()=>{
        const {cart_products}=newAppStore
       this.setState({cart_items:cart_products})


    }
    checkOut=()=>{
        const{cart_items}=this.state;
        let cost=0
        cart_items.forEach(item=>{
            let price=parseFloat(item.total_price)
            cost+=price
            
        })
        cost=cost.toFixed(2)
        cost=parseFloat(cost)
        alert(cost)
        
    }
    cart_itemClicked=async(item_id)=>{
        await newAppStore.selected_item(item_id)
        const{navigation}=this.props
            navigation.push("Item")
    }
render(){
    
    const {cart_items}=this.state
    
    //  const {cart_data}=this.props
     const {remove_item,inc_quantity,dec_quantity,cart_products}=newAppStore
     
    return(
        <View style={{flex:1,backgroundColor:"rgb(242, 253, 255)"}}>

{cart_items.length?
        <View style={{position:"absolute",bottom:0,right:0,zIndex:1,width:"100%"}}>
        <TouchableOpacity
        style={{backgroundColor:"goldenrod",height:40,borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}
        onPress={this.checkOut}
        >
            <Text>CHECKOUT</Text>
        </TouchableOpacity>
        </View>:<View >
            <Text style={{fontSize:30,color:"black",fontWeight:"bold",textAlign:"center"}}>No Items Found In Cart...</Text>
        </View>}
<View style={{flex:0.93}}>       
     <ScrollView >
    <View style={{marginTop:10}}>
        {
            cart_items.map(item=>(
                
                <TouchableOpacity onPress={()=>this.cart_itemClicked(item.id)} key={item.id} style={{height:125,backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:5,margin:5,borderWidth:2}}>
                <View style={{borderWidth:2,borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                    <Image

                    style={{height:120,width:150,borderTopLeftRadius:5,borderBottomLeftRadius:5}}
                    source={{uri:item.image}}
                    />
                </View>
              <View style={{height:120,display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
                    <Text style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>{item.title}</Text>
                    <Text style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>Price:{item.total_price}</Text>
                    <Text style={{color:"black",fontStyle:"italic",fontWeight:"bold"}}>Quantity:{item.quantity}</Text>
                   <View style={{display:"flex",flexDirection:"row",width:100,justifyContent:"space-around"}}>
                   <Icon name="remove-circle-sharp" onPress={async()=>{
                       await dec_quantity(item.id)
                       this.setState({cart_items:cart_items})
                   }} style={{fontSize:20,color:"black"}}/>
                   <Icon name="add-circle-sharp"
                   onPress={async()=>{
                    await inc_quantity(item.id)
                    this.setState({cart_items:cart_items})
                }}
                   style={{fontSize:20,color:"black"}}/>
                   </View>
                </View>
                <View style={{alignSelf:"flex-start"}}
                 onStartShouldSetResponder={async()=>{
                     await remove_item(item.id)
                     await this.props.cart_length()
                     this.setState({cart_items:cart_items})
                 }}
                >
                    <Icon name="close-sharp" size={20}/>
                </View>
              
                </TouchableOpacity>
            ))
        }
    </View>
   
    </ScrollView>
    </View>

    </View>
    )
}

}


export default Cart