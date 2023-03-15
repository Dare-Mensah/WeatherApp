import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { ImageBackground } from 'react-native';

const WeatherInfo2 = ({weatherData2, fetchWeatherData2}) => {
    const {
        name,
        main: {temp, feels_like},
        weather: [{icon,main}]
    } = weatherData2
    const [NameCity, SetCityName] = useState('');

  return (
    <View style={styles.container} >
    <View style={styles.container1}>
        <TextInput style={styles.Search}
        placeholder='City Name'
        value={NameCity}
        onChangeText={(text) => SetCityName(text)}
    />
        <EvilIcons style={styles.Search2} name="search" size={30} color="black" 
        onPress={() => fetchWeatherData2(NameCity)}
    />
    </View>
    <View style={styles.container2}>
        <Text style={styles.Temperature}>{Math.round(weatherData.main?.temp)}°</Text>
        <Text style={styles.description}>{main}</Text>
    </View>
    <View style={styles.container3}>
        <Text style={styles.cityName}>{name}</Text>
        <AntDesign style={styles.Icon} name="enviromento" size={24} color="black" />
    </View>

   </View>
  )
}

export default WeatherInfo2

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,

    },
    Search:{
        fontSize: 24,
        marginTop: 20,
        top: 20,
        flexDirection: 'row',
        color: '#FFFFFF'
    },
    Search2:{
        flexDirection: 'row',
        marginTop: 20,
        top: 20,
    },
    container2:{
        marginTop: 30,
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
    },
    container3:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    Temperature: {
        fontSize: 90,
        color: '#FFFFFF'
    },
    cityName:{
        fontSize: 20,
        color: '#FFFFFF'
    },
    description: {
        fontSize: 45,
        color: '#FFFFFF'
    },

})