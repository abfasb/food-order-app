import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const express = require('express');

const router = express.Router();

router.post('/', jwtCheck, MyUserController.createCurrentUser);
router.get('/', jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.put('/', jwtCheck, jwtParse, MyUserController.updateCurrentUser);

export default router;
