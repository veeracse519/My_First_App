
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react"
import Chat from './chat';
import Community from './community';
import Notifications from './Notifications';
const Tab = createMaterialTopTabNavigator();
class TopTab extends React.Component {
    render(){
  return (
    <Tab.Navigator initialRouteName="Community">
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Notications" component={Notifications}/>
    </Tab.Navigator>
  );
}
}
export default TopTab