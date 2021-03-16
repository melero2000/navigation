/**STACK NAVIGATION: NAVEGACIÓN EN SUPERPOSICIÓN DEPANTALLAS, CON BARRA SUPERIOR CON NOMBRE DE LA PANTALLA Y
 * BACK ARROW
 *
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="about" component={About} options={{title: 'About'}} />
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{title: 'Contact'}}
      />
    </Stack.Navigator>
  );
}
