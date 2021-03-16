/*
 * TAB NAVIGATION: BARRA INFERIOR DE NAVEGACIÓN, SIN BARRA SUPERIOR NI BACK ARROW, NAVEGACIÓN ENTRE PANTALLAS
 * SIN SUPERPOSICIÓN - NO SE PUEDEN AÑADIR PÁGINAS OCULTAS (QUE NO APAREZCAN EL MENÚ) por lo q hay q combinar stack y tab
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import ContactStack from './ContactStack';
import AboutStack from './AboutStack';

import About from '../screens/About';
import Contact from '../screens/Contact';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      {/**Se le pasa el componente HomeStack así se combinan el Stack con el tab navigation */}
      <Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />
      <Tab.Screen
        name="contact"
        component={ContactStack}
        options={{title: 'Contact'}}
      />
      <Tab.Screen
        name="about"
        component={AboutStack}
        options={{title: 'About'}}
      />
    </Tab.Navigator>
  );
}
