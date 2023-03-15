import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WeatherInfo2 from './WeatherInfo2';


const WeatherInfo = ({weatherData, fetchWeatherData }) => {
    const Data ={
        name,
        main: {temp, feels_like,temp_min, temp_max, humidity},
        weather: [{icon,main}],
        sys:{sunrise,sunset},
        wind: {speed},
    } = weatherData

        const [cityName, setCityName] = useState('');

  return (

    
    <View style={styles.container}>
    <View style={styles.container1}>
        <TextInput style={styles.Search}
        placeholder='City Name'
        placeholderTextColor= '#FFFFFF'
        value={cityName}
        onChangeText={(text) => setCityName(text)}
    />
        <EvilIcons style={styles.Search2} name="search" size={29} color="black" 
        onPress={() => fetchWeatherData(cityName)}
    />
    </View>
    <View style={styles.container2}>
        <Text style={styles.Temperature}>{Math.round(weatherData.main?.temp)}°</Text>
        <Text style={styles.description}>{main}</Text>
    </View>
    <View style={styles.container3}>
        <Text style={styles.cityName}>{name}</Text>
        <AntDesign style={styles.Icon1} name="enviromento" size={24} color="black" />
    </View>
    <View style={styles.extraInfo}>
        <View style={styles.info}>
            <Feather style={styles.Icon2} name="sunrise" size={30} color="black" />
            <Text style={styles.infoText2}>Sunrise</Text>
            <Text style={styles.infoText}>{new Date(sunrise*1000).toLocaleTimeString()}</Text>
        </View>
        <View style={styles.info}>
            <Feather style={styles.Icon2} name="sunset" size={30} color="black" />
            <Text style={styles.infoText2}>Sunset</Text>
            <Text style={styles.infoText}>{new Date(sunset*1000).toLocaleTimeString()}</Text>
        </View>
        <View style={styles.info}>
            <Feather style={styles.Icon2} name="wind" size={30} color="black" />
            <Text style={styles.infoText2}>Wind</Text>
            <Text style={styles.infoText}>{Math.round(speed)} m/s</Text>
        </View>
    </View>
    <View style={styles.extraInfo}>
        <View style={styles.info}>
            <FontAwesome5 style={styles.Icon2} name="temperature-high" size={30} color="black" />
            <Text style={styles.infoText2}>Temp-Max</Text>
            <Text style={styles.infoText}>{Math.round(temp_max)}°</Text>
        </View>

        <View style={styles.info}>
            <FontAwesome5 style={styles.Icon2} name="temperature-low" size={30} color="black" />
            <Text style={styles.infoText2}>Temp-Min</Text>
            <Text style={styles.infoText}>{Math.round(temp_min)}°</Text>
        </View>

        <View style={styles.info}>
            <Ionicons style={styles.Icon2} name="water" size={30} color="black" />
            <Text style={styles.infoText2}>Humidity</Text>
            <Text style={styles.infoText}>{Math.round(humidity)}%</Text>
        </View>
    </View>

    




   </View>
  )
}

export default WeatherInfo

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    container1: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
        marginTop: 80,
        borderRadius: 20,
        borderColor: '#FFFFFF',

        
    },
    Search:{
        fontSize: 20,
    },
    Search2:{
        size: 32,
        left: 220,
        flexDirection: 'row',
        color: '#FFFFFF',
    },
    container2:{
        marginTop: 10,
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
    container4:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 50,
        right: 100,
    },
   
    Temperature: {
        fontSize: 100,
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
    Icon1:{
        color: '#FFFFFF',
        marginLeft: 10,
    },
    Icon2: {
        marginLeft: 10,
        color: '#FFFFFF',
        marginLeft: 55,
    },
    extraInfo: {
        flexDirection: 'row',
        padding: 7,
        justifyContent: 'space-around',
        marginTop: 20,

    },
    info:{
        marginTop: 20,
        width: Dimensions.get('screen').width/2.5,
        //backgroundColor:'#000000',
        padding: 10,
        borderRadius: 20,
       
    },
    infoText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },
    infoText2: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },




})