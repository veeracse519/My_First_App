import React from "react"
import {TouchableOpacity,View,Text} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
class Ratting extends React.Component{
    
render(){
    const{count,actual_ratting,remaining}=this.props
    let remain=remaining   
    let c=0
    return(
        <TouchableOpacity
        style={{backgroundColor:"green",width:130,borderRadius:2,height:25,display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}
        >
               <Text style={{color:"white"}}>{actual_ratting}/5</Text>
               <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                {
                    count.map(item=>(
    
                        <Icon key={item.id} name={item.val==="Y"?"star":remain-->0?"star-half":"star-outline"} size={15} color="white"/>
                       
                    ))
                }
             
            
            
            </View>

        </TouchableOpacity>
       
    )
}
}
export default Ratting