import axios from 'axios';

const API_KEY = '87f9a7c1aa899ce9b9716841c2be5cea';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},ng`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}