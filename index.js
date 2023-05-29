const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(express.json({limit : 52428800}));

app.use('/api/v1/auth', (req,res) => {
    res.send("Auth ROute");
});
app.use('/api/v1/blog', (req,res) => {
    res.send("Blog ROute");
});
const port = process.env.PORT;


app.listen(port, () => {
    console.log("Server Started");
})