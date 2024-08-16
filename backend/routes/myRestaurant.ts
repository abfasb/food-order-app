import MyRestaurantController from '../controllers/MyRestaurantController';
import multer from 'multer';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyRestaurantRequest } from '../middleware/validation';

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
    }
})

const express = require('express');

const router = express.Router();

router.post('/', upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, MyRestaurantController.createCurrentUser);
router.get('/', jwtCheck, jwtParse, MyRestaurantController.getCurrentUser);
router.put('/', upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, MyRestaurantController.updateCurrentUser);

export default router;

