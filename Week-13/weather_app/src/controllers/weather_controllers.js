import { getCurrentWeatherByCityService, getForecastWeatherByCityService } from '../services/weather_services.js';

const getCurrentWeatherByCity = async(req, res, next) => {
    let city = req.query.city
    if(!city) {
        next({statusCode: 400, message: 'Please provide a valid city name'})
    }
    try{
        let response = await getCurrentWeatherByCityService(city);
        res.json({statusCode: 200, data: response})
    } catch(e) {
        next({statusCode: 500, message: 'Oops Something wen wrong'})
    }

}

/* const getCurrentWeatherList = async(req, res, next) => {
    
    let cityList = ["Indore", "Bhopal", "Punjab", "Rishikesh", "Jaipur", "Delhi", "Jabalpur", "Gwalior", "Goa"]
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let start = (page-1) * limit;
    let cities = cityList.slice(start, limit);

    try{
       let response = await getCurrentWeatherListService(cities);
       res.json({
                    statusCode: 200, 
                    data: response,
                    total:cityList.length,
                    currentPage: page,
                    nextPage: page + 1,
                }) 
    } catch(error) {
        next({statusCode: 500, message: "Oops, Something went wrong!"});
    }
} */

const getForcastWeatherByCity = async(req, res, next) => {

    if(!req.query.city) {
        next({statusCode: 400, message: 'Please provide a valid city name'})
    }

    if(!req.query.days) {
        next({statusCode: 400, message: 'Please provide a valid number of days'})
    }

    if(req.query.days < 1 || req.query.days > 10) {
        next({statusCode: 400, message: 'Please provide a valid number of days between 1 ~ 10'})
    }

    try{
        let response = await getForecastWeatherByCityService(req.query.city, req.query.days);
        res.json({statusCode: 200, data: response})
    }catch(error) {
        next({statusCode: 500, message: "Oops, Something went wrong!"});
    }

}

const getHistoricalWheatherByCity =  async(req, res, next) => {
    
    if(!req.query.city) {
        next({statusCode: 400, message: 'Please provide a valid city name'})
    }

    if(!req.query.city) {
        next({statusCode: 400, message: 'Please provide a valid number of days'})
    }

    if(req.query.days < 1 && req.query.days > 10) {
        next({statusCode: 400, message: 'Please provide a valid number of days between 1 ~ 10'})
    }

    if(!req.query.date) {
        next({statusCode: 400, message: 'Please provide a valid date'})
    }

    try {
        let response = await getHistoricalWheatherByCity(req.query.city, req.query.date);
        res.json({statusCode: 400, data: response})
    }catch(error){
        next({statusCode: 500, message: "Oops, Something went wrong"})
    }

}

export  { 
    getCurrentWeatherByCity, 
    getForcastWeatherByCity, 
    getHistoricalWheatherByCity
};