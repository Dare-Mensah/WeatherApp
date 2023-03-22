import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ImageBackground, Pressable, SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Weather from './src';
import * as Location from 'expo-location';
import Weather2 from './src/index2';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [isToggled,setIsToggled] =useState(false)
   return (
    <ImageBackground source={require('./src/Background3.jpg')} style={styles.container} resizeMode='cover'>
    <ScrollView style={styles.container}>
      <Weather/>
      <Pressable
      onPress={() => setIsToggled(!isToggled)}
      >
      {isToggled && <Weather2/>}
      <Text style={styles.Text} >Add Location/Remove Location</Text>
      <AntDesign style={styles.Icon} name="pluscircle" size={37} color="black" />

      </Pressable>
      <StatusBar style="auto" />
    </ScrollView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  Icon:{
    color: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    
  },
  Text:{
    color:'#FFFFFF',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
  },
});

