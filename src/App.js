import React from "react";
import "weather-icons/css/weather-icons.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';
const city="Rewari"
const country="India";
const API_key="4c56291fb9ae29b781690f468fd9d03c";
class App extends React.Component{
constructor(){
  super();
  this.state={
    city:undefined,
    country: undefined,
    icon: undefined,
    main:undefined,
    celsius: undefined,
    temp_max: undefined,
    temp_min:undefined,
    desription:"",
    error: false
  };
  this.getWeather();
}

getWeather = async () =>{
 
  const api_call = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
  ); const response = await api_call.json();
    console.log(response);
    this.setState({
      city: response.name,
      country: response.sys.country
    });
};
render(){
  return(
    <div className="App">
    <Weather city={this.state.city} country={this.state.country}/>
     </div>
  );
}
}


export default App;
