const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session');
const MongoStore = require('connect-mongo')
const path = require('path')
const dotenv = require('dotenv');
const connectDB = require('../config/db')

const passport = require('../config/passport')
const AuthController = require('../controllers/AuthController');

dotenv.config()
connectDB()

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'))
app.use(cors())



app.post('/register', (req,res) => {
    res.send({
        message: `Hello ${req.body.email}! welcome`
    });
});

app.use(passport.initialize());
app.use(passport.session());


const ArticleController = require('../controllers/ArticleController');
const Profile = require('../routes/profile');


app.use('/api/auth', AuthController)
app.use('/api/article', ArticleController)
app.use("/api", require("../routes/index"))
app.use("/api/profile", Profile)


const root = process.cwd()
console.log(root)
if(process.env.NODE_ENV === 'production' ){
    app.use(express.static(path.join(root, 'client/dist')))
    // app.use(express.static('C:/Users/Natnael/OneDrive/Documents/Projects/techarticle/client/dist'))
    app.get('*', (req, res) => res.sendFile(path.resolve(root, 'client', 'dist', 'index.html')))
}


app.listen(process.env.PORT || 8081, () =>
  console.log(`Example app listening on port 8081`),
);