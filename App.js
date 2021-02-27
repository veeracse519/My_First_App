import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen1';
import ProfileScreen from './Screen2';
import Account_page from './Acount';
import Signle_Item_page from './Single_Item';
import UserProfile from "./user_profile";
import AsyncStorage from '@react-native-community/async-storage';
import newAppStore from './newStore';
import Loading from './Loading';
class App extends React.Component {
  render(){

  return (
      <NavigationContainer>
  <Stack.Navigator >
    <Stack.Screen name="Load" component={Loading}
    options={{
      headerLeft:null,
      headerTitleAlign:"center",
      headerShown:false
    }}
    />
  <Stack.Screen name="Home" component={HomeScreen} options={{
    headerLeft:null,
    headerTitleAlign:"center",
    headerShown:false
    }} />
    
<Stack.Screen name="Account" 
        children={props=>(
          <Account_page
          {...props}
          />
        )
        }
         options={{
          headerLeft:null,
          headerShown:false
          }}/>        
        <Stack.Screen name="Profile" component={ProfileScreen} options={{
          headerShown:false
          }}/>
  
      

        
        <Stack.Screen name="Item" component={Signle_Item_page} options={{
          headerTitleAlign:"center"
          }}/>
          <Stack.Screen name="user_profile" component={UserProfile} options={{
          headerTitleAlign:"center"
          }}/>
      </Stack.Navigator>
  
      </NavigationContainer>
  );
 } 
}
const Stack = createStackNavigator();
export default App;
