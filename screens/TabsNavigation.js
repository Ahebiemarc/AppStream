import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import DataScreen from '../screens/DataScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CharScreenY from './CharScreenY';
import SyllosScreen from './SyllosScreen';
import SingleDataScreen from './SingleDataScreen';
import ProgressSyllo from '../components/ProgressSyllo';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  
  return (
    <Tab.Navigator initialRouteName='Home'
    screenOptions={({ route }) => ({
      tabBarIcon: ({focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'chart-line';
        } else if (route.name === 'DataY') {
          iconName = 'chart-pie';
        } else if (route.name === 'Settings') {
          iconName = 'chart-scatter-plot';
        }

        // Return an Ionicons icon component
        return <MaterialCommunityIcons 
        name={iconName} 
        size={/*focused ? size + 10 : */size}
        color={focused ? '#8b8989' : color}/>;
      },
    })}
    >
      
      <Tab.Screen name='Home' component={SyllosScreen}
       options={{headerShown: false, tabBarShowLabel: false}}/>
      <Tab.Screen name='DataY' component={CharScreenY}  
      options={{headerShown: false, tabBarShowLabel: false}}/>
      <Tab.Screen name='Settings' component={ProgressSyllo}  
      options={{headerShown: false, tabBarShowLabel: false}}/>
    </Tab.Navigator>
  )
}

export default TabsNavigation