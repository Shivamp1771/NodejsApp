const express = require('express')
const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const flash = require('connect-flash')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const signupController = require('./controllers/signup')
const signupUserController = require('./controllers/signupuser')
const g2pageController = require('./controllers/g2')
const g2formController = require('./controllers/g2Form')
const glicenseController = require('./controllers/glicense')
const glicenseformController = require('./controllers/glicenseform')
const appoinementController = require('./controllers/appointment')
const appoinementEntryController = require('./controllers/appointmentEntry')
const authMiddleware = require('./middleware/authMiddleware')
const logoutController = require('./controllers/logout')

const fileUpload = require('express-fileupload')
app.use(fileUpload())

global.loggedIn = null;
global.UserType = null;

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(flash());
app.use(expressSession({
    secret: 'keyboard cat'
}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    UserType = req.session.userType;
    console.log("loggedIn"+loggedIn+"User Type:"+UserType);
    next()
});

mongoose.connect('mongodb+srv://Himani:admin@cluster0.1g13v.mongodb.net/KishokApp', {useNewUrlParser: true, useUnifiedTopology: true,})

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.get('/',(req,res)=>{
    console.log(req.session.userId, req.session.UserType)
    res.render('dashboard')
})

app.get('/login', loginController)
app.post('/auth/login', loginUserController)
app.get('/SignUp', signupController)
app.post('/auth/signup', signupUserController)
app.get('/G2_License', g2pageController)
app.post('/g2form', g2formController)
app.get('/G_License', glicenseController)
app.get('/appointment',appoinementController)
app.post('/appointmentForm', appoinementEntryController)
app.post('/gform', glicenseformController)
app.get('/auth/logout', logoutController)
app.use((req, res) => res.render('notfound'))