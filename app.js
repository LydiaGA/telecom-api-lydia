const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();
const router = require("./routes");

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', function(){
    console.log("Connected to MongoDb Successfully");
});

mongoose.connection.on('error', function(){
    console.log("Failed to Connect to MongoDB");

    mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

router(app);

module.exports = app;
