import axios from 'axios';



const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'ad7d2f658d53c84f2ae8cbfc665adb6e';

export const getWeatherData = async (cityname,metric) => {
    const { data } = await axios.get(baseUrl + `q=${cityname}&units=${metric}&appid=${apiKey}`);
    return data;

}