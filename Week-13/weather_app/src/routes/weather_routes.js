import express from 'express';
var router = express.Router();
import { getCurrentWeatherByCity, getForcastWeatherByCity, getHistoricalWheatherByCity } from '../controllers/weather_controllers.js';

router.get('/', (req, res)=> {res.send('I am weather')})
router.get('/current', getCurrentWeatherByCity);
router.get('/forcast', getForcastWeatherByCity);
router.get('/history', getHistoricalWheatherByCity);

export default router;