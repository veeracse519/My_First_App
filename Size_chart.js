import React from "react"
import {View,Text} from "react-native"
class Size_chart extends React.Component{
render(){
    let c=0;
    const{itemSizes}=this.props
    return(
<View style={{display:"flex",flexDirection:"row"}}>             
     {itemSizes.availableSizes.map(item=>(
                  <View key={c++} style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(252, 255, 253)",width:30,height:30,borderRadius:50,marginRight:10}}>
                      <Text>{item}</Text>
                       </View>
              ))}
             </View>

    )
}
}
export default Size_chart