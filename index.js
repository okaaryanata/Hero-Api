const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routers = require('./routers');
const mongoose = require('mongoose');

// mongodb connection, (db 'mobile-legend-heroes' tidak harus ada) jika db tidak ada maka terbuat otomatis
mongoose.connect('mongodb://localhost:27017/mobile-legend-heroes')
mongoose.Promise = global.Promise;

// initialize body-parser
app.use(bodyParser.json());

// initialize routers
app.use('/api',routers);

app.listen(8000, function(){
    console.log('express app now listening requests');
})