import React from 'react';
import {View, Text, Button} from 'react-native';

export default function About(props) {
  const {navigation} = props;
  console.log(props);
  return (
    <View>
      <Text>Estamos en About</Text>
      <Button
        title="Contact - navegará como stack porque la página está añadadida en AboutStack "
        onPress={() => navigation.navigate('contact')}
      />

      <Button
        title="Home - navegará como tab porque NO está añadadida en AboutStack "
        onPress={() => navigation.navigate('home')}
      />
    </View>
  );
}
