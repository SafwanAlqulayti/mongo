const mongoose = require('mongoose');

const Ingredient = require('./models/ingredient');
const Food =require('./models/food')
const mongoURI = 'mongodb://localhost:27017/mongoRelationships';

mongoose.connect(mongoURI,{useNewUrlParser:true},()=>{
    console.log('the connection start');
})
Food.findOne({name: "pizza"})
.populate('ingredients')
.exec((err,food)=>{
    if(err){
        return console.log(err);
    }
    if(food.ingredients.length > 0){
        console.log(`this has ${food.ingredients[0].name} and ${food.ingredients[1].name}`)
    }
})