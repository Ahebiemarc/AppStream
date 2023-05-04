import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import DataScreen from '../screens/DataScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  
  return (
    <Tab.Navigator initialRouteName='Home'
    screenOptions={({ route }) => ({
      tabBarIcon: ({focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'ios-home';
        } else if (route.name === 'Profile') {
          iconName = 'ios-person-outline';
        } else if (route.name === 'Settings') {
          iconName = 'ios-settings';
        }

        // Return an Ionicons icon component
        return <Icon 
        name={iconName} 
        size={/*focused ? size + 10 : */size}
        color={focused ? '#8b8989' : color}/>;
      },
    })}
    >
      
      <Tab.Screen name='Home' component={DataScreen}
       options={{headerShown: false, tabBarShowLabel: false}}/>
      <Tab.Screen name='Profile' component={ProfileScreen}  
      options={{headerShown: false, tabBarShowLabel: false}}/>
      <Tab.Screen name='Settings' component={SettingsScreen}  
      options={{headerShown: false, tabBarShowLabel: false}}/>
    </Tab.Navigator>
  )
}

export default TabsNavigation