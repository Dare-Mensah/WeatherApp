import { ImageBackground, Pressable, StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import WeatherInfo from './WeatherInfo';
import * as Location from 'expo-location';

const API_KEYS ='4e2fec0f64e24a04a3964b04ba319b3a'
let url = `https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=daily&appid=${API_KEYS}`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setloaded] = useState(false);

  const [forecast, setForecast] = useState(null);
  const [refreshing, setRefresing] = useState(false);

  const loadForecast = async () => {
    setRefresing(true);
    const {status} = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted') {
      Alert.alert('Permission to access location was denied')
    }

    let location = fetchWeatherData(cityName);

    const response = fetchWeatherData(cityName);
    const data = await response.json();

    if(!response.ok){
      Alert.alert('Error, Something went wrong');
    } else{
      setForecast(data);
    }
    setRefresing(false);

  }


  //fetching weather data
  const fetchWeatherData = async(cityName) => {
    try{
      setloaded(false);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`);
      if (response.status == 200){
        const data = await response.json();
        setWeatherData(data);
      }
      else {
        setWeatherData(null);
      }
      setloaded(true)

    } catch(error) {
        Alert.alert('Error',error.message)
    }
  }


    
  useEffect(() => {
      fetchWeatherData('London');
      loadForecast('London')
  }, []);

  


  if(!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color="red" />
      </View>
    )
  }

  return (
    <ImageBackground source={require('./Background3.jpg')} style={styles.container} resizeMode='cover'>
      <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>

      
    </ImageBackground>
  )
}

export default Weather

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },

    menuIcon:{
      position: 'absolute',
      right: 150,
      top: 70,
      
    }
})