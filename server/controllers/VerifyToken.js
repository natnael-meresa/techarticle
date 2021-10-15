const jwt = require('jsonwebtoken')
const config = require('../config/config')

function verifyToken(req, res, next) {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        var token =  req.headers.authorization.split(' ')[1];
        console.log(`token1:- ${token}`)
    } else if (req.query && req.query.token) {
        var token = req.query.token;
        console.log(`token2:- ${token}`)

    }
	// var token = req.headers['x-access-token'];

	console.log(`token outside:- ${token}`)
	if(!token)
		return res.status(403).send({auth: false, message: 'No token provided'});

	jwt.verify(token, config.secret, function(err , decoded){
		if (err) return res.status(500).send({auth:false, message: 'Failed to authenticate token'});
		console.log(`decoded:- ${decoded.id}`)
		
	req.userId = decoded.id;

	next()	
	})
}

// function verifyOptional(req, res, next) {

// }

module.exports = verifyToken;