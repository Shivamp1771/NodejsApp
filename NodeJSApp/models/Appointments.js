const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

mongoose.connect('mongodb+srv://Himani:admin@cluster0.1g13v.mongodb.net/KishokApp', 
{useNewUrlParser: true, useUnifiedTopology: true,})

const Appointment = new Schema({
    AppointmentDate:{
        type: String,
        default: new Date(),
        required: [true,'Please provide Appointment Date']
    },
    appt: {
        type: String,
        required: [true,'Please provide Appointment Time'],
        unique: true
        }
    }, (error, appointment) => {
        console.log(error, appointment)
});

Appointment.plugin(uniqueValidator);
const appointment = mongoose.model('appointment', Appointment)
module.exports = appointment