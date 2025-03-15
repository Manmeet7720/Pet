const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const path =require('path');
const morgan = require('morgan');

const categoryRoutes = require('./routes/category');
const petRoutes = require('./routes/pet');
const adoptionRoutes = require('./routes/adoption');

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('tiny'));

app.use('/public',express.static(path.join(__dirname,'public')));

//routes
app.use('/api/category',categoryRoutes);
app.use('/api/pets',petRoutes);
app.use('/api/adoption', adoptionRoutes);

const mongoUri = 'mongodb://127.0.0.1:27017/pet';

mongoose.connect(mongoUri,{
    useNewUrlParser: true,
});

mongoose.connection.on('connected',() => {
    console.log("connected to Mongodb...");
})

mongoose.connection.on('error',(err) => {
    console.log("Error connecting to Mongodb...",err);
})
const port=4000
app.listen(4000, () =>{
    console.log(`app is running on ${port} port`);
})