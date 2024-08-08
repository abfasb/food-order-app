import myUserRoute from '../controllers/MyUserController';
import myRestaurantRoute from '../routes/myRestaurant';
import { v2 as cloudinary } from 'cloudinary';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = 5000;

const uri = "mongodb+srv://matbalinton:root@matdb.iv1uwka.mongodb.net/?retryWrites=true&w=majority&appName=matDb";
mongoose.connect(uri)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is connected to port ${PORT}`);
        });
    })
    .catch((error: any) => {
        console.error('Something went wrong:', error);
    });


app.use(bodyParser.json());
app.use(cors());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


//app.use('/api/my/user', myUserRoute);
app.use('/api/my/restaurant', myRestaurantRoute);
//app.use('/api/restaurant', restaurantRoute);
//app.use('/api/my/user', orderRoute);


//api/my/user -- myUserRoute
//api/my/restaurant -- myRestaurantRoute
//api/restaurant --restaurantRoute
//api/order --orderRoute

//Controller MyRestaurantController, MyUserController, OrderController, RestaurantController



