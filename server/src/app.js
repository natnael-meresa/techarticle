const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/techarticle_db',{
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useFindAndModify: true,
  useCreateIndex: true,
}).then(()=> console.log("connected to the database!")).catch((err) => console.log(err));

app.post('/register', (req,res) => {
    res.send({
        message: `Hello ${req.body.email}! welcome`
    });
});

app.use("/api", require("../routes/index"))


app.listen(process.env.PORT || 8081, () =>
  console.log(`Example app listening on port 8081`),
);