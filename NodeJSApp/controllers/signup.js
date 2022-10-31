module.exports = (req, res) => {

    var Username = ""
    var pwd = ""
    const data = req.flash('data')[0]

    if(typeof data != "undefined"){
        Username = data.Username
        pwd = data.pwd
    }

    res.render('SignUp',{
        // errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
        Username: Username,
        pwd: pwd
    })
}