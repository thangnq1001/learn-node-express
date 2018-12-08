const mongoose = require('mongoose');
const envConfig = require('./environment/config');
mongoose.connect(envConfig.database.path, { useNewUrlParser: true } );