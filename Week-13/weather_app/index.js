import express from 'express';
import dotenv from 'dotenv';
import WeatherRoutes from './src/routes/weather_routes.js';
import errorHandler from './src/handlers/error_handlers.js';

dotenv.config();
const app = express();

app.get('/',(req,res) => {
    res.send('API is up and running!');
});

app.use('/weather', WeatherRoutes);
app.use(errorHandler);

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log("Server started successfully");
});
