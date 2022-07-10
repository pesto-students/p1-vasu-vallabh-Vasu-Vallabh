import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

let baseUrl = `http://api.weatherapi.com/v1`
const apiKey = process.env.API_KEY || "";

const getCurrentWeatherByCityService = async(city) => {
    try {
        let {data} = await axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${city}&aqi=yes`);
        console.log(data);
        return data
    } catch(error) {
        throw new Error(error)       
    }
}

const getForecastWeatherByCityService =  async(city, days) => {
    try {
        let { data } = await axios.get(`${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=${days}`);
        return data;
    } catch(error) {
        throw new Error(error);
    }
}

const getHistoricalDataWeatherByCityService = async(city, date) => {
    console.log(city, date);
    try{
        let { data } = await axios.get(`${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=${days}`);
        return data
    } catch(error) {
        throw new Error(error)
    }
}

export { getCurrentWeatherByCityService, getForecastWeatherByCityService, getHistoricalDataWeatherByCityService };