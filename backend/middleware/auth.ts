import { auth } from 'express-oauth2-jwt-bearer'
import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import User from '../models/user';
const jwt = require('jsonwebtoken');
const express = require('express');


declare global {
    namespace Express {
        interface Request {
            auth0Id: string,
            userId: string
        }
    }
}

const app = express();

export const jwtCheck = auth({
    audience: process.env.AUDIENCE_URL,
    issuerBaseURL: process.env.BASE_URL,
    tokenSigningAlg: 'RS256'
  });


export const jwtParse = async(req : Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.sendStatus(401);
    }

    const token = authorization.split(" ")[1];

    try {
        const decoded = jwt.decode(token) as JwtPayload
        const auth0Id = decoded.sub;

        const user = await User.findOne({auth0Id})
        if (!user) {
            return res.sendStatus(401);
        }
        req.auth0Id = auth0Id as string
        req.userId = User._id.toString();
        next();
    }   
    catch (error) {
        res.status(500).send(error);
    }
}