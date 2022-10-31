const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.connect('mongodb+srv://Himani:admin@cluster0.1g13v.mongodb.net/KishokApp', 
{useNewUrlParser: true, useUnifiedTopology: true,})

const KishokApp = new Schema({ 
    FirstName: {
        type: String,
        required: [true,'Please provide FirstName']
    }, 
    LastName: {
        type: String,
        required: [true,'Please provide LastName']
    },
    UserId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'users',
       required: true
    },
    DOB: {
        type: String,
        required: [true,'Please provide date of birth']
    },
    HouseNo: {
        type: Object
    },
    StreetName: {
        type: Object
    },
    City: {
        type: Object
    },
    Province: {
        type: Object
    },
    PostalCode: {
        type: Object
    },
    Make: {
        type: Object
    },
    Model: {
        type: Object
    },
    Year: {
        type: Number
    },
    PlatNumber: {
        type: Object
    },
    image: String,
    inputLicenseNumber: {
        type: String,
        required: [true,'Please provide LicenseNumber of 8 characters'], 
        maxLength: 8
        }
    }, (error, G2) => {
        console.log(error, G2)
});

KishokApp.pre('save', function(next){
    const g2details = this
    bcrypt.hash(g2details.inputLicenseNumber, 10, (error, hash) => {
        g2details.inputLicenseNumber = hash
        next()
    })
})
KishokApp.pre('save', function(next){
    const g2details = this
    bcrypt.hash(g2details.DOB, 10, (error, hash) => {
        g2details.DOB = hash
        console.log(g2details.DOB)
        next()
    })
})

KishokApp.plugin(uniqueValidator);
const G2 = mongoose.model('G2', KishokApp)
module.exports = G2