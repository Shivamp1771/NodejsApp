const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.connect('mongodb+srv://Himani:admin@cluster0.1g13v.mongodb.net/KishokApp', 
{useNewUrlParser: true, useUnifiedTopology: true,})

const UserSchema = new Schema({
    Username:{
        type: String,
        required: [true,'Please provide username'],
        unique: true
    },
    pwd:{
        type: String,
        required: [true,'Please provide password']
    },
    UserType:{
        type: String,
        required: true
    }
})

UserSchema.pre('save', function(next){
    const g2details = this
    bcrypt.hash(g2details.pwd, 10, (error, hash) => {
        g2details.pwd = hash
        next()
    })
})

UserSchema.plugin(uniqueValidator);
const User = mongoose.model('User', UserSchema)
module.exports = User