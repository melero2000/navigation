import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} options={{title: 'Home'}} />
    </Drawer.Navigator>
  );
}
