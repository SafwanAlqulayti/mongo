const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Food = require('./models/food');
const Ingredient = require('./models/ingredient')

const mongoURI = 'mongodb://localhost:27017/mongoRelationships';

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log('the connection with mongod is established')
})

app.listen(3000, () => {
  console.log('listening');
});
 
// get all food 
app.get('/api/food',(req,res)=>{
Food.find({})
.populate('ingredients')
.exec((err,food) => {
    if(err){
        res.status(500).send(err);
        return;
    }
    res.json(food)
})
})