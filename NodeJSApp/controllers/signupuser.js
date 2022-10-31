const user_details = require('../models/User.js')
const path = require('path')

module.exports = async (req, res) => {
     //console.log(req.body);
     await user_details.create(req.body, (error,user_details) => {
        if(error){
            //console.log(error)
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data',req.body)
            // res.session.validationErrors = validationErrors
            return res.redirect('/SignUp')
        } else {
            return res.redirect('/Login')
        }
    })
}