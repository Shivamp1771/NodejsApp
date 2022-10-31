module.exports = (req, res) => {

    var FirstName = ""
    var LastName = ""
    var DOB = ""
    var inputLicenseNumber = ""
    const data = req.flash('data')[0]

    if(typeof data != "undefined"){
        FirstName: data.FirstName
        LastName: data.LastName
        DOB: data.DOB
        inputLicenseNumber: data.inputLicenseNumber
    }

    res.render('G2_License',{
        // errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
        FirstName: FirstName,
        LastName: LastName,
        DOB: DOB,
        inputLicenseNumber: inputLicenseNumber
    })
}