import axios from 'axios';

const API_KEY = '85a918d6d9beeb39d13475f2feb7a219';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}q=${city}&appid=${API_KEY}`;
  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
