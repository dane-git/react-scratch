export const weatherByWOEID = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`)
      .then(aWeather => aWeather.json()
        .then(weather => {
          console.log(weather)
          let drise = new Date(weather.sun_rise).toLocaleTimeString();
          let dset = new Date(weather.sun_set).toLocaleTimeString();
          let wdate = new Date(weather.time).toLocaleDateString();
          let minTemp = weather.consolidated_weather[0].min_temp;
          let maxTemp = weather.consolidated_weather[0].max_temp;
          let nowTemp = weather.consolidated_weather[0].the_temp;
          let minTempF = (minTemp * 9 / 5) + 32;
          let maxTempF = (maxTemp * 9 / 5) + 32;
          let nowTempf = (nowTemp * 9 / 5) + 32;
          let wind = {
            speed: weather.consolidated_weather[0].wind_speed,
            direction: weather.consolidated_weather[0].wind_direction,
            compassDirection: weather.consolidated_weather[0].wind_direction_compass
          }
          let summation = weather.consolidated_weather[0].weather_state_name

          console.log(weather.consolidated_weather[0]);

          let weatherReport = {
            date: wdate,
            location: weather.title,
            summation: summation,
            rise: drise,
            set: dset,
            low: minTemp,
            high: maxTemp,
            lowf: minTempF,
            highf: maxTempF,
            nowtemp: nowTempf,
            wind: wind,
          }
          console.log(weatherReport)
          resolve(weatherReport)
        })
      )
  }
  )
}
