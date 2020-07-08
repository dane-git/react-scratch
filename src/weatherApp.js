import React, { Component } from 'react';
import './weatherApp.css';
import validator from 'validator';
import { weatherByWOEID } from './functions/weatherWOEID';
import { geoFetch } from './functions/geoFetchWeather';
import { getGeo } from './functions/getGeo'


async function getGeoAW() {
  const geo = await getGeo()
  console.log(geo)
  const fetchLocalArr = await geoFetch(geo)
  console.log(fetchLocalArr)
  let WOEID = fetchLocalArr[0].woeid
  const weather = await weatherByWOEID(WOEID)
  console.log(weather)
  return weather
}



// functional compononent
function Weather(props) {
  return (
    <div>
      <p> weather Functional component weatherApp.js</p>
      <code>{props.all}</code>
    </div>
  )
}

export const WEATHER = <Weather all={getGeoAW()} />


// class weatherApp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       weather: [],
//     }; // end this.state
//   } //end constructor
//   componentDidMount() {
//     getGeoAW
//       .then(result => this.state.weather = result)
//       .then(weatherState => console.log(weatherState))
//   }

//   render() {
//     console.log(this.state.weather)
//     return (
//       <div className="weather-today">
//         {this.state.wheather}
//         <div>TESING WEATHERAPP</div>
//       </div>
//     )

//   }

// }

// export default weatherApp;
