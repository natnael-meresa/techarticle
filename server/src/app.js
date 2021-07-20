const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

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


app.listen(process.env.PORT || 8081, () =>
  console.log(`Example app listening on port 8081`),
);
