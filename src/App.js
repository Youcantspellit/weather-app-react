import React, { Component } from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const Api_Key = "9a78d8964c51538a2802976ac66efb77"
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const myWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`)
    const myWeatherAnswer = await myWeather.json()
    console.log(myWeatherAnswer)
    if (city && country) {
      this.setState({
        temperature: myWeatherAnswer.main.temp,
        city: myWeatherAnswer.name,
        country: myWeatherAnswer.sys.country,
        humidity: myWeatherAnswer.main.humidity,
        description: myWeatherAnswer.weather[0].description,
        error: ""

      })
    } else {
      this.setState({
        error: "Please enter the values..."
      })
    }
  }
  render() {
    console.log(this.state.description)
    return (
      <div className="App">
        <Titles />
        <Form submitGetWeatherNameProps={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
      </div>
    );
  }
}

export default App;
