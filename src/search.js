import { StyleSheet, Text, View, TextInput,  } from 'react-native'
import React, {useState} from 'react'

const WeatherSearch = ({fetchWeatherData}) => {
    const [cityName, setCityName] = useState('');
  return (
    <View style={styles.container}>
      <TextInput placeholder='City Name'/>
    </View>
  )
}

export default WeatherSearch

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})