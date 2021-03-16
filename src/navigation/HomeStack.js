/**STACK NAVIGATION: NAVEGACIÓN EN SUPERPOSICIÓN DEPANTALLAS, CON BARRA SUPERIOR CON NOMBRE DE LA PANTALLA Y
 * BACK ARROW
 *
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      {/**Al estar combinado con el tabNavbigation solo se renderizará la 1 página, las demás estarán ocultas
       * pero cuando se haga click en un botón el cual nos envie a ellas, navegará como stack en vez de como tab
       */}
      <Stack.Screen name="home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen name="about" component={About} options={{title: 'About'}} />
    </Stack.Navigator>
  );
}
