import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const express = require('express');

const router = express.Router();

router.post('/', MyUserController.createCurrentUser);
router.get('/', MyUserController.getCurrentUser);
router.put('/', MyUserController.updateCurrentUser);

export default router;
