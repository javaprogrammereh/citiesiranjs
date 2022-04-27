const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');

const connectDB = require('./config/db');
const {errorHandler} = require('./middlewares/errors');
// const { setHeaders } = require("./middlewares/headers");

//* Load Config
dotEnv.config({path:"./config/config.env"});

//* Database connection
connectDB();

const app = express();

//* BodyPaser
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// app.use(setHeaders);

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));

//* Routes
app.use("/ostans",require("./routes/ostanRouter"));
app.use("/cities",require("./routes/citiesRouter"));


//* Error Controller
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
));