import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title="Ir para resultado"
        onPress={() => navigation.navigate('Results')}
      />

      <Button
        title="Abrir Camera"
        onPress={() => navigation.navigate('Escanear')}
      />
    </View>
  );
}
