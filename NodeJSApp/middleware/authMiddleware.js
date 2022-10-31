const User = require('../models/User.js')

module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        //console.log("authmiddleware"+req.session.userType);

        if(error || !user){
            return res.redirect('/Login')

            next()
        }
        
    })
}