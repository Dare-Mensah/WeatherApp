import { StyleSheet, Text, View, ActivityIndicator, Alert, SafeAreaView } from 'react-native'
import React from 'react'
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import Forecast from './Forecast';
import { FlatList } from 'react-native-gesture-handler';


const API_KEYS ='49cc8c821cd2aff9af04c9f98c36eb74';
let url= `https://api.openweathermap.org/data/2.5/forecast?&units=metric&exclude=minutely&appid=${API_KEYS}`;


const Weather2 = () => {
/*  const [forecast, setforecast] =useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadForecast = async () => {
    setRefreshing(true);
    const {status} =await Location.requestForegroundPermissionsAsync(); //asking for permission ot the current locatioon
    if(status !== 'granted') {
      Alert.alert('Access Location Denied'); // if access to location is denied
    }


    let location =await Location.getCurrentPositionAsync({enableHighAccuracy:true});

    const response =await fetch(`${url}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
    const data = await response.json(); //converting the response to json

    if(!response.ok){
      Alert.alert('Error','Something Went Wrong')
    } else {
      console.log(data) //logging data to terminal for debugging
      setforecast(data) //setting data to state
    }
    setRefreshing(false)
  }

  useEffect(() => {
    loadForecast()
  }, []);

  if(!forecast){
    return(
      <SafeAreaView>
        <ActivityIndicator size='large' color="red" />
      </SafeAreaView>
    )
  } 
*/  

const [data, setData] = useState({});

useEffect(() => {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      fetchDataFromApi("40.7128", "-74.0060")
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    fetchDataFromApi(location.coords.latitude, location.coords.longitude);
  })();
}, [])

const fetchDataFromApi = (latitude, longitude) => {
  if(latitude && longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=4&exclude=minutely&units=metric&appid=${API_KEY}
    `).then(res => res.json()).then(data => {

    console.log(data) //debugging
    setData(data)
    })
  }
  
}

 
  return (
    <View>
      <Text style={styles.Title1}>Current Location Forecast</Text>
      <View style={styles.border}>
        <Text style={styles.Day} >Today</Text>
      </View>

    </View>
  )
}


export default Weather2

const styles = StyleSheet.create({
  Day:{
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 20,
},
extrainfo:{
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 20,
    
},

border:{
    flex:0.28,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,

},
Title1:{
    fontSize: 20,
    marginTop: 50,
    color: '#FFFFFF',
    textAlign: 'center',

}
})