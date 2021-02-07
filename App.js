import React, { useState, useEffect } from 'react';
import './App.css';
import { getWeatherData } from './data/weatherapi';
import {Buttom} from './Components/Buttom'
import { Loader } from './Components/Loader'
import { WeatherBox } from './Components/WeatherBox'

function App() {
  const [weather, setWeatherData] = useState(null);
  const [city, setCity] = useState('santo domingo');
  const [loading, setLoading] = useState(false);
  const [metric, setmetric] = useState("metric")
  const [metricTitle, setMetricTitle] = useState("C")

  const handleMetric = async () =>{
    setmetric("imperial")
    setMetricTitle("F")
    setWeatherData(weather)
    getData()
  }

  const getData = async () => {
    setLoading(true);
    const data = await getWeatherData(city,metric);
    setWeatherData(data);
    setLoading(false);

  }

  


  useEffect(() => {

    getData()

  }, []);


  return (
    <div className="main-container">

      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ciudad" className="input-text" />
      <input type="button" onClick={() => getData()} value="Buscar"/>


      {loading ? (<div className="loader-container">
        <Loader loading={loading} />
      </div>
      ) : (
        <>
          {weather !== null ? (
            <WeatherBox 
              city={weather.name} 
              country={weather.sys.country}
              icon={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              stateDescripcion={weather.weather[0].description}
              grade={weather.main.temp}
              min={weather.main.temp_min}
              max={weather.main.temp_max}
              humidity={weather.main.humidity}
              titleGrade = {metricTitle}
            />
          
          ) : null}
          <Buttom onClick={handleMetric}/>
        </>
      )}
      
    </div>
  );
}

export default App;
