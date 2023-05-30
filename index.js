const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const { connection } = require('./DB/conn');
var cookieParser = require('cookie-parser')
const authRoutes=require('./routes/authRoutes.js');

app.use(express.json({ limit: 52428800 }));
app.use(cookieParser());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use(morgan('dev'));

app.use('/api/v1/auth', authRoutes);


// app.use(cors());



const port = process.env.PORT;


app.listen(port, () => {
    console.log("Server Started");
})