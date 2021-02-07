import React from 'react'

export const WeatherBox = ({ country, city, icon, grade, min, max, humidity, stateDescripcion,titleGrade  }) => {
    return (
        <div className="city">
            <h2 className="city-name">
                <span>{city}</span>
                <sup>{country}</sup>
            </h2>
            <div className="city-temp">
                <span>{grade}</span>
                <sup>&deg;{titleGrade}</sup>

            </div>
            <div className="info">
                <img className="city-icon animate__animated animate__shakeY" src={icon} alt="Clima images" />
                <p>Descripcion</p>
                <h2>{stateDescripcion}</h2>
                <h2>Min: {min}&deg;{titleGrade}
                    || Max: {max}&deg;{titleGrade}
                    || Humidity: {humidity}%</h2>
            </div>
        </div>
    )
}


