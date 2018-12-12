const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./db');
const userRoute = require('./route/user.route');
const authRoute = require('./route/auth.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/user', userRoute);
app.use('/auth', authRoute);

module.exports = app;