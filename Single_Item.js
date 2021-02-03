import React from "react"
import { View ,Image,Button,Text,BackHandler,ScrollView,TouchableOpacity} from "react-native"
// import { TouchableOpacity } from "react-native-gesture-handler";
import HomeScreen from "./Home_screen";
import HomeScreen1 from "./Home_screen1";
import newAppStore from "./newStore";
import Ratting from "./ratting";
import Icon from 'react-native-vector-icons/Ionicons';
// import Carousel from 'react-native-snap-carousel'
import Size_chart from "./Size_chart";
class Signle_Item_page extends React.Component{
    state={
        actual_item:null,
            Items_List:[],
            selected_Size:[],
            select_size:null,
            Items_Another_List:[],
            id:null,
            selected_page:true,
            cart_items_count:0,
            added_id:null
    }

    componentDidMount(){
        this._unsubscribe =this.props.navigation.addListener('focus', () => {
            this.get_Item()
          });
    
    }
    componentWillUnmount() {
        this._unsubscribe();
      }
    get_Item=()=>{
        const{actual_item,Items_List,cart_items_count}=this.state
        const{cart_products}=newAppStore
        this.setState({cart_items_count:cart_products.length,actual_item:newAppStore.Selected_item,Items_List:newAppStore.remain_data})
    }
    goToItemPage=async(e)=>{
        const{cart_products}=newAppStore
        await newAppStore.products_In_Cart(e)
        await this.setState({cart_items_count:cart_products.length})
        await this.setState({added_id:e})
        setTimeout(()=>{
            this.setState({added_id:null})
        },700)
    }
    single_item_Select=async(item_id)=>{
       await newAppStore.selected_item(item_id)
        const{navigation}=this.props
            navigation.push("Item")
    }
    cartClicked=()=>{
        const{navigation}=this.props
            navigation.navigate("Cart_Screen")
    }
render(){
    const{actual_item,Items_List,cart_items_count,added_id}=this.state
    let ratting_count=(Math.random()*(5.0 - 1.0)+1.0).toFixed(1)
    let count=parseInt(ratting_count)
    let count_array=[]
    for(let i=0;i<5;i++){
        if(i<count){
           count_array[i]={id:i,val:"Y"}
        }
        else{
            count_array[i]={id:i,val:"N"}
        }
    }
    let remaing=(ratting_count%count)
    return(
    <View>
         

        <Text style={{position:"absolute",bottom:35,right:40,zIndex:2,color:"goldenrod"}}>{cart_items_count}</Text>    
        <TouchableOpacity onPress={this.cartClicked}
         style={{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",bottom:10,right:15,zIndex:1,width:60,height:60,borderWidth:1,backgroundColor:"rgb(3, 15, 66)",borderRadius:50}}>
            <Icon name="cart-outline" size={45} color="goldenrod"/>
        </TouchableOpacity>
        <ScrollView>
        
    <View> 
       {actual_item!==null?
       <View style={{display:"flex",flexDirection:"row"}}>
           <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",position:"absolute",bottom:85,right:35,zIndex:1}}>
                  {actual_item.id==added_id?<Text style={{color:"#fff",paddingTop:4,width:120,height:30,fontSize:15,backgroundColor:"#555",textAlign:"center",borderRadius:5}}>Added to cart</Text>
                   :<Text></Text>}
                   </View>
          <Image
          style={{height:350,width:"50%"}}
          source={{uri:actual_item.image}}
          />
          <View style={{marginLeft:10,height:350,width:"50%",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
          <Text>{actual_item.title}</Text>
          <Text>{actual_item.style}</Text>
          <Ratting count={count_array} actual_ratting={ratting_count} remaining={remaing}/>
          <TouchableOpacity
          style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(220, 245, 227)",width:50,borderRadius:5,height:22}}
          >
          <Text style={{color:"green"}}>Price</Text>
          </TouchableOpacity>
          <Text>{actual_item.currencyFormat+actual_item.price}</Text>
          <Text>{actual_item.isFreeShipping?<Text>FREE SHIPPING</Text>:<Text>{actual_item.currencyFormat}49 SHIPPING CHARGES</Text>}</Text>
              <Text>Availble Sizes:</Text>
              <Size_chart itemSizes={actual_item}/>
          
          <TouchableOpacity style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"goldenrod",width:150,height:30,padding:3,borderRadius:5}}
               
               onPress={()=>this.goToItemPage(actual_item.id)}
               >
                   <Text style={{color:"black"}}>Add Cart</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"goldenrod",width:150,height:30,padding:3,borderRadius:5}}
               
               onPress={()=>this.goToItemPage(actual_item.id)}
               >
                   <Text style={{color:"black"}}>Buy Now</Text>
                   </TouchableOpacity>
       </View></View>:
       <Text></Text>}
       <HomeScreen1 added_id_is={added_id} goToItemPage={this.goToItemPage} Items_data={Items_List} single_item_Select={this.single_item_Select}/>
    </View>
    </ScrollView>
    </View>
)
}
}
export default Signle_Item_page