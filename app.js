const express = require('express');
const router = require('./src/routes/api');
const app = new express();
app.use(express.json());
const bodyParser = require('body-parser');
//Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
//Database Middleware
const mongoose = require('mongoose');
const path = require("path");

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
//Body Parser
app.use(bodyParser.json());

//Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
})
app.use(limiter);

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}))





app.use('/api/v1',router);

//Database Connection
const url = 'mongodb://0.0.0.0:27017/Mern_Ecom';
let options = {user:'',pass:'',autoIndex:true};
mongoose.set('strictQuery',false);
mongoose.connect(url,options).then((res)=>{
    console.log("Successfully connected to Database");
}).catch((err)=>{
    console.log(err);
})

// Managing FrontEnd Routing
app.use(express.static('client/dist'));
app.get("*",(req,res)=>{
    req.sendfile(path.resolve(__dirname,'client','dist','index.html'))
})
module.exports = app;