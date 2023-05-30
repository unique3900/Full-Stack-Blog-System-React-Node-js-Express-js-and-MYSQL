const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const { connection } = require('./DB/conn');

const authRoutes=require('./routes/authRoutes.js');

app.use(express.json({limit : 52428800}));
app.use(morgan('dev'));
app.use('/api/v1/auth', authRoutes);


app.use(cors());


const port = process.env.PORT;


app.listen(port, () => {
    console.log("Server Started");
})