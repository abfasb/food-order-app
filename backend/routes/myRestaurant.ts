import MyRestaurantController from '../controllers/MyRestaurantController';

const express = require('express');

const router = express.Router();

router.post('/', MyRestaurantController.createUser);
router.post('/', MyRestaurantController.getUser);
router.post('/', MyRestaurantController.createUser);

export default router;