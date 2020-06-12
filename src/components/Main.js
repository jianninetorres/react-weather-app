import React, { useState } from "react";
import axios from "axios"; // api call
import Context from "../Context"; // context api

import Header from "./Header";
import Tagline from "./Tagline";
import Content from "./Content"; // keeps content centered
import WeatherSearch from "./WeatherSearch"; // form component
import WeatherData from "./WeatherData"; // info display
import DateTime from "./DateTime";
import Error from "./Error";
import Footer from "./Footer";

const Main = () => {
  // useState is for declaring and managing state in a functional component
  // takes one optional argument, which is the initial value of the state we want to work with and returns an array with two values
  // first value is the state
  // second value is the function used to update the value of the state
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();
  // const weather = useState[0]
  // const setWeather = useState[1]
  const api_call = async (e) => {
    e.preventDefault(); // to make sure the page doesn't refresh after the form is submitted
    const location = e.target.elements.location.value;
    if (!location)
      return setError("Please enter the name of the city"), setWeather(null);

    const API_KEY = "6bb445db14ec3b81f032a75242146e11";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);

    setWeather(response.data.main);
    setCity(response.data.name);
    setError(null);
  };

  // if weather state has been set
  weather && console.log(weather);

  return (
    <div className="main">
      <Header />
      <Content>
        <DateTime />
        <Tagline />
        <Context.Provider value={{ api_call, weather, city, error }}>
          <WeatherSearch />
          {weather && <WeatherData />}
          {error && <Error error={error} />}
        </Context.Provider>
        <Footer />
      </Content>
    </div>
  );
};

export default Main;
