import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const express = require('express');

const Router = express.Router();

Router.post('/', jwtCheck, MyUserController.createUser);
Router.get('/', jwtCheck, MyUserController.getUser);
Router.put('/', jwtCheck, jwtParse, MyUserController.updateUser);
