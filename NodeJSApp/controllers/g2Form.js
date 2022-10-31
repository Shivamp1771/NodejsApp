const G2 = require('../models/DriverInterface.js')
const path = require('path')

module.exports = (req, res) => {
    let image = req.files.image;
        image.mv(path.resolve(__dirname,'..','public/img',image.name), (error) =>{
        //console.log(req.body)
        G2.create({
            ...req.body,
            image: '/img/' + image.name,
            UserId: req.session.userId
        }, (error,G2) => {
            if(error){
                //console.log(error)
                const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data',req.body)
                // res.session.validationErrors = validationErrors
                return res.redirect('/G2_License')
            } else {
                return res.redirect('/')
            }
        }) 
    })
}
