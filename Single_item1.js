import React from "react"
import { View ,Image,Button,Text,BackHandler,ScrollView} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeScreen from "./Home_screen";
import newAppStore from "./newStore";
import Ratting from "./ratting";
// import Carousel from 'react-native-snap-carousel'
import Size_chart from "./Size_chart";
class Signle_Item_page1 extends React.Component{
    state={
        actual_item:null
    }
    
    componentDidMount(){
    this.get_Item()
    }
    get_Item=()=>{
        const{actual_item}=this.state
        this.setState({actual_item:newAppStore.Selected_item})
    }
render(){
    const{actual_item}=this.state
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
    return(<ScrollView>
    <View> 
       {actual_item!==null?
       <View style={{display:"flex",flexDirection:"row"}}>
          <Image
          style={{height:350,width:"50%",borderWidth:1}}
          source={{uri:actual_item.image}}
          />
          <View style={{marginLeft:10,height:350,width:"50%",borderWidth:1,display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
          <Text>{actual_item.title}</Text>
          <Text>{actual_item.style}</Text>
          <Ratting count={count_array} actual_ratting={ratting_count} remaining={remaing}/>
          <TouchableOpacity
          style={{backgroundColor:"rgb(220, 245, 227)",width:50,borderRadius:5,height:22}}
          >
          <Text style={{color:"green"}}>Price</Text>
          </TouchableOpacity>
          <Text>{actual_item.currencyFormat+actual_item.price}</Text>
          <Text>{actual_item.isFreeShipping?<Text>FREE SHIPPING</Text>:<Text>{actual_item.currencyFormat}49 SHIPPING CHARGES</Text>}</Text>
              <Text>Availble Sizes:</Text>
              <Size_chart itemSizes={actual_item}/>
          
          <TouchableOpacity style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"goldenrod",width:150,height:30,padding:3,borderRadius:5}}
               
               onPress={()=>this.goToItemPage(item.id)}
               >
                   <Text style={{color:"black"}}>Add Cart</Text>
                   </TouchableOpacity>
       </View></View>:
       <Text></Text>}
       <HomeScreen/>
    </View>
    </ScrollView>)
}
}
export default Signle_Item_page1