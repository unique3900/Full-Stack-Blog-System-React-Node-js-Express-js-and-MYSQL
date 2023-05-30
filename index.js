const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
const { connection } = require('./DB/conn');

const authRoutes=require('./routes/authRoutes.js');

app.use(express.json({limit : 52428800}));

app.use('/api/v1/auth',authRoutes);


const port = process.env.PORT;


app.listen(port, () => {
    console.log("Server Started");
})