import React from 'react';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';
import 'weather-icons/css/weather-icons.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = '29d02913330218981978b15e1a360c63';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      temp0: undefined, temp1: undefined,  temp2: undefined, temp3: undefined, temp4: undefined,
      min0: undefined, min1: undefined, min2: undefined, min3: undefined, min4: undefined,
      max0: undefined, max1: undefined, max2: undefined, max3: undefined, max4: undefined,
      des0: undefined, des1: undefined, des2: undefined, des3: undefined, des4: undefined,
      icon0: undefined, icon1: undefined, icon2: undefined, icon3: undefined, icon4: undefined,
      lat: undefined, lon: undefined
    };
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  round(temp) {
    let cell = Math.round(temp);
    return cell;
  }

  get_WeatherIcon(rangeId) {
    switch(true) {
      case rangeId >= 200 && rangeId <= 232:
        return this.weatherIcon.Thunderstorm;
      case rangeId >= 300 && rangeId <= 321:
        return this.weatherIcon.Drizzle;
      case rangeId >= 500 && rangeId <= 531:
        return this.weatherIcon.Rain;
      case rangeId >= 600 && rangeId <= 622:
        return this.weatherIcon.Snow;
      case rangeId >= 701 && rangeId <= 781:
        return this.weatherIcon.Atmosphere;
      case rangeId === 800:
        return this.weatherIcon.Clear;
      case rangeId >= 801 && rangeId <= 804:
        return this.weatherIcon.Clouds;
      default:
        return this.weatherIcon.Clouds;
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const lat = e.target.elements.lat.value;
    const lon = e.target.elements.lon.value;
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`);

    const response = await api_call.json();
    console.log(response);
    this.setState({
        temp0: this.round(response.daily[0].temp.day), temp1: this.round(response.daily[1].temp.day), temp2: this.round(response.daily[2].temp.day), temp3: this.round(response.daily[3].temp.day), temp4: this.round(response.daily[4].temp.day),
        min0: this.round(response.daily[0].temp.min), min1: this.round(response.daily[1].temp.min), min2: this.round(response.daily[2].temp.min), min3: this.round(response.daily[3].temp.min), min4: this.round(response.daily[4].temp.min),
        max0: this.round(response.daily[0].temp.max), max1: this.round(response.daily[1].temp.max), max2: this.round(response.daily[2].temp.max), max3: this.round(response.daily[3].temp.max), max4: this.round(response.daily[4].temp.max),
        des0: response.daily[0].weather[0].description, des1: response.daily[1].weather[0].description, des2: response.daily[2].weather[0].description, des3: response.daily[3].weather[0].description, des4: response.daily[4].weather[0].description,
        icon0: this.get_WeatherIcon(response.daily[0].weather[0].id), icon1: this.get_WeatherIcon(response.daily[1].weather[0].id), icon2: this.get_WeatherIcon(response.daily[2].weather[0].id), icon3: this.get_WeatherIcon(response.daily[3].weather[0].id), icon4: this.get_WeatherIcon(response.daily[4].weather[0].id)
    })
  }; 

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} />
        <Weather 
        temp0={this.state.temp0} temp1={this.state.temp1} temp2={this.state.temp2} temp3={this.state.temp3} temp4={this.state.temp4}
        min0={this.state.min0} min1={this.state.min1} min2={this.state.min2} min3={this.state.min3} min4={this.state.min4}
        max0={this.state.max0} max1={this.state.max1} max2={this.state.max2} max3={this.state.max3} max4={this.state.max4}
        des0={this.state.des0} des1={this.state.des1} des2={this.state.des2} des3={this.state.des3} des4={this.state.des4}
        icon0={this.state.icon0} icon1={this.state.icon1} icon2={this.state.icon2} icon3={this.state.icon3} icon4={this.state.icon4}/>
      </div>
    )
  }
}

export default App;