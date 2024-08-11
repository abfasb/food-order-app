import RestaurantController from "../controllers/RestaurantController";

const express = require('express');


const router = express.Router();

router.get('/api/restaurant/:city', RestaurantController.getCurrentUser)