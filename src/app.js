const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./db');
const userRoute = require('./route/user.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/user', userRoute);

module.exports = app;