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
app.use(session({
      secret: "very secret",
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({  mongoUrl:'mongodb://localhost:27017/techarticle_db' })
    })
);
app.use(passport.initialize());
app.use(passport.session());


const ArticleController = require('../controllers/ArticleController');
const Profile = require('../routes/profile');


app.use('/api/auth', AuthController)
app.use('/api/article', ArticleController)
app.use("/api", require("../routes/index"))
app.use("/api/profile", Profile)



app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if(process.env.NODE_ENV === 'production' ){
    app.use(express.static(path.join(__dirname, '/client/dist')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html')))
}


app.listen(process.env.PORT || 8081, () =>
  console.log(`Example app listening on port 8081`),
);