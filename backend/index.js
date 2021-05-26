const express = require('express');


const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');


mongoose.connect("mongodb+srv://arnabi:arnabi@cluster0.i2uqe.mongodb.net/FormDatabase?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
  }, ()=>console.log("DB connected"));


app.use(express.json());
app.use(cors());
app.use('/data',routesUrls);

app.listen(3080, ()=>{console.log("Server running on 3080")});
 
