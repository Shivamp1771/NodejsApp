const bcrypt = require('bcrypt')
const user_data = require('../models/User.js')

module.exports = (req, res) => {
    const { Username, pwd } = req.body;

    user_data.findOne({Username:Username}, (error, user_data) => {
        if(user_data){
            bcrypt.compare(pwd, user_data.pwd, (error, same) => {
                if(same){
                    req.session.userId = user_data._id
                    req.session.userType = user_data.UserType
                    //console.log("usertype on login session:"+req.session.userType);
                    if((req.session.userId!='') && (req.session.userType=='Driver')) {
                        res.redirect('/')
                    } else {
                        console.log('user type is not a driver')
                        res.redirect('/')
                    }
                } else {
                    console.log(error)
                    res.redirect('/Login')
                }
            })
        } else {
            console.log(error)
            res.redirect('/Login')
        }

    })
}