import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home(props) {
  /**Por props, nos llega automáticamente el objeto navigation que podremos usar sus métodos
   * como "navigate" para navegar por las pantallas
   */
  const {navigation} = props;
  console.log(props);
  return (
    <View>
      <Text>Estamos en HOME</Text>

      {/**navigation.navigate('NAME(el name de la pantalla en navigation.js)') para navegar */}
      <Button title="Ir a About" onPress={() => navigation.navigate('about')} />
      <Button
        title="Ir a Contact"
        onPress={() => navigation.navigate('contact')}
      />
      <Button
        title="Ir a CURSOS"
        /**Para viajar navegar a una screen que se encuentra dentro de otro stack que todavía no ha sido
         * cargado, debemos en el navigate indicar primero el nombre de la primera página del stack
         * y pasarle un objeto con screen y el nombre de la pantalla que queramos cargar
         *
         * Ojo, si la página que queremos ir es la primera del stack, no hace falta pasarle el screen
         * ya que la primera página del stack es la que se renderiza siempre y no está oculta como las
         * de debajo suya
         */
        onPress={() => navigation.navigate('contact', {screen: 'courses'})}
      />
    </View>
  );
}
