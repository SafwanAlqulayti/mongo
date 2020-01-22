// const Ingredient = require('./models/ingredient');
// const Food = require('./models/food');
// const mongoose = require("mongoose");

// const mongoURI = 'mongodb://localhost:27017/mongoRelationships';
// mongoose.connect(mongoURI,{useNewUrlParser:true},()=>{
//     console.log("The connection in estiblashed ")
// });

// var cheddar = new Ingredient({
//     name: 'cheddar cheese',
//     origin: 'Wisconson'
//   });
  
//   var dough = new Ingredient({
//     name: 'dough',
//     origin: 'Iowa'
//   });
  
//   // SAVE THE TWO INGREDIENTS SO 
//   // WE HAVE ACCESS TO THEIR _IDS
//   cheddar.save(function (err, savedCheese) {
//     if (err) {
//       return console.log(err);
//     } else {
//       console.log('cheddar saved successfully');
//     }
//   });
  
//   dough.save((err, savedCheese) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('dough saved successfully');
//     }
//   })

// // new food 
// const pizza = new Food({
//     name: "pizza",
//     ingredients:[]
// })

// pizza.ingredients.push(cheddar);
// pizza.ingredients.push(dough);

// pizza.save((err , saved)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`saved ${saved}`)
//     }
// })