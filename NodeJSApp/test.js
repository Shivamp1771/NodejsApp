const e = require('express')
const mongoose = require('mongoose')
const G2 = require('./models/DriverInterface')

mongoose.connect('mongodb+srv://Himani:admin@cluster0.1g13v.mongodb.net/KishokApp', {useNewUrlParser: true})

/*
 G2.create({
    FirstName: 'Himani', 
    LastName: 'Patel',
    UserId: 'H12345',
    DOB: '02-02-2022'
    }, (error, g2) => {
     console.log(error, cd)
 }) 

 G2.create({
    FirstName: "Jesica", 
    LastName: "Johnson",
    UserId: "H12345",
    DOB: "02-02-2022",
    inputLicenseNumber: "46375893759",
    Address: {
        HouseNo: "26",
        StreetName: "preston parkway",
        City: "Cambridge",
        Province: "Ontario",
        PostalCode: "7987"
    },
    Car: {
        Make: "Tesla",
        Model: "TZ48",
        Year: "2020",
        PlatNumber: "56423643483"
    },
    image: "img/home-BigInt.jpg"
    }, (error, g2) => {
        console.log(error, e)
}) */