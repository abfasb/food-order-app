import MyRestaurantController from '../controllers/MyRestaurantController';

const express = require('express');

const router = express.Router();

router.post('/', MyRestaurantController.createCurrentUser);
router.post('/', MyRestaurantController.getCurrentUser);
router.post('/', MyRestaurantController.updateCurrentUser);

export default router;

