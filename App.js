import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './screen1';
import ProfileScreen from './Screen2';
import Account_page from './Acount';
import Signle_Item_page from './Single_Item';
import Signle_Item_page1 from './Single_item1';
import Example from './Example';

class App extends React.Component {
 render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Account" component={Account_page} options={{headerLeft:null}}/>
        <Stack.Screen name="Item" component={Signle_Item_page} />
      </Stack.Navigator>
    </NavigationContainer>
  );

 } 
}
const Stack = createStackNavigator();
export default App;
