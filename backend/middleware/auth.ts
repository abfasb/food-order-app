import { auth } from 'express-oauth2-jwt-bearer'
const express = require('express');


const app = express();

export const jwtCheck = auth({
    audience: process.env.AUDIENCE_URLs,
    issuerBaseURL: 'https://dev-d8m8rwyxyrn6d5xk.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });
