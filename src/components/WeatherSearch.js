import React, { useContext } from "react";

// this component is wrapped in a Context so
// it is expecting a state from it
import Context from "../Context";

const WeatherSearch = () => {
  // extract state from Context
  const { api_call } = useContext(Context);
  //   const api_call = useContext(Context).api_call;
  return (
    <div className="weather-search">
      <form onSubmit={api_call} className="weather-search__form">
        <input
          autoComplete="off"
          className="weather-search__input"
          type="text"
          name="location"
        />
        <div className="weather-search__submit">
          <button className="weather-search__button">&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
