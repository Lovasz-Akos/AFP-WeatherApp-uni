import React from 'react';
import './App.css';
import Axios from 'axios';

import DisplayWeather from './components/DisplayWeather.js';

class App extends React.Component  {

  state = {
    coords:{
      latitude: 50,
      longitude: 55
    },
    data: {}
  }
  componentDidMount(){
    if(navigator.geolocation){
        
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        }
        this.setState({ coords: newCoords });
        Axios.get(`http://api.weatherstack.com/current?access_key=8a6ac22a561da3e32e9d19281854c260&query=
        ${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons,
            cloudcover: res.data.current.cloudcover,
            precip: res.data.current.precip,
          }
          this.setState( {data: weatherData});
        })
})
} else {
console.log("Not supported")
}}
render() {

 return (
   <div className = "App">
     <DisplayWeather weatherData = {this.state.data} />

   </div>

  );
 }
}


export default App;
