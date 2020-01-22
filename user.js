const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const tweetSchema = new Schema({
    text:{
        type: String ,
        default: ''
    },
    data: Data
}) ;

const userSchema = new Schema ({
    name: String ,
    tweets: [tweetSchema]
})

const Tweet = mongoose.model('Tweet',tweetSchema);
const User = mongoose.model('User',userSchema)

module.exports = {Tweet , User}