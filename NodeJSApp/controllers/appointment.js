module.exports = (req, res) => {
    var AppointmentDate = ""
    var appt = ""
    const data = req.flash('data')[0]

    if(typeof data != "undefined"){
        AppointmentDate = data.AppointmentDate
        appt = data.appt
    }

    res.render('appointment',{
        // errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
        AppointmentDate: AppointmentDate,
        appt: appt
    })
}