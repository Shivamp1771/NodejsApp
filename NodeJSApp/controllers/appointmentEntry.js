const A2 = require('../models/Appointments.js')
const path = require('path')

module.exports = async(req, res) => {

    await A2.create(req.body, (error,A2) => {
        if(error){
            console.log(error)
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data',req.body)
            return res.redirect('/appointment')
        } else {
            return res.redirect('/')
        }
    })
}