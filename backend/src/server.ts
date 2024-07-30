import routes from "../routes/createRouteFirst";

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

mongoose.connect(process.env.Mongo_DB)
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


