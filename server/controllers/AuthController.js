const express = require('express');
const router = express.Router();
const User = require('../src/models/User')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config.js')

const VerifyToken = require('./VerifyToken')

router.post('/register', function(req, res) {

	var hashedPassword = bcrypt.hashSync(req.body.password, 10);

	User.create({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: hashedPassword
	},
	function (err, user) {
		if (err) return res.status(500).send("There was a problem registering the user.")

		var token = jwt.sign({ id: user._id, email: user.email}, config.secret, {
			expiresIn: 86400
		});

	res.status(200).send({auth: true, token: token, username: user.username})
	});
});

router.get('/me', VerifyToken, function(req, res, next) {
	console.log(`req.id${req.userId}`)
	User.findById(req.userId, {password: 0}, function (err, user) {
		if (err) return res.status(500).send("There was a problem finding the user.");
    	if (!user) return res.status(404).send("No user found Sorray.");

    	console.log(`user:-- ${user}`)
    	res.status(200).send(user);
	})
})

router.post('/login', function(req, res){
	User.findOne({email: req.body.email}, function (err, user) {
		if (err) return res.status(500).send('Error on the server');
		if (!user) return res.status(404).send('No user found');

		var paswordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!paswordIsValid) return res.status(404).send('Credintail invalid');

		var token = jwt.sign({ id:user._id, email:user.email}, config.secret, {
			expiresIn: 86400
		});

		res.status(200).send({auth:true, token:token, username: user.username})
	})
})


module.exports = router