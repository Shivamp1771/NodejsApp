const G2 = require('../models/DriverInterface.js')

module.exports = async (req, res) => {
    var Userid = req.body.UserId;
    const g2data = await G2.find({UserId: Userid})
    let err_msg = 'No User Found';
    if(g2data == ''){
        res.render('G_License', {
            g2data: g2data,
            err_msg: err_msg
        });
        console.log(err_msg)
        console.log(g2data)
    } else {
        res.render('G_License', {
            g2data: g2data
        });
        console.log(g2data)
        var Id = g2data[0]._id;
        console.log(Id);
        if((req.body.HouseNo!='')&&(req.body.StreetName!='')&&(req.body.City!='')&&
        (req.body.Province!='')&&(req.body.PostalCode!='')&&(req.body.Make!='')&&(req.body.Model!='')
        &&(req.body.Year!='')&&(req.body.PlateNumber!='')){
            G2.findByIdAndUpdate(Id,{
                HouseNo: req.body.HouseNo,
                StreetName: req.body.StreetName,
                City: req.body.City,
                Province: req.body.Province,
                PostalCode: req.body.PostalCode,
                Make: req.body.Make,
                Model: req.body.Model,
                Year: req.body.Year,
                PlateNumber: req.body.PlateNumber
            }, (error,G2) => {
                console.log(error,G2)
                console.log('Data updated successfully')
            })
        }
    }
}
