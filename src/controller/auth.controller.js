const User = require('../model/user');
const httpStatus = require('http-status');
const bcrypt = require('bcrypt');
const config = require('../config');
const jwt = require('jsonwebtoken');

const SECONDS_PER_MIN = 60;

module.exports.login = (req, res) => {
    if (!req.body.username || !req.body.password) {
        return res.status(httpStatus.UNAUTHORIZED).json({message: 'Username and password are required'})
    }
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if (err || !foundUser) {
            console.log(err);
            return res.status(httpStatus.UNAUTHORIZED).json({message: 'Username is wrong'});
        }
        if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
            return res.status(httpStatus.UNAUTHORIZED).json({message: 'Password is wrong'});
        }
        let tokenOptions = {
            expiresIn: config.auth.jwt.expiresInMins * SECONDS_PER_MIN
        };
        let payload = {
            username: req.body.username
        };
        let accessToken = jwt.sign(payload, config.auth.jwt.secretKey, tokenOptions);
        res.status(httpStatus.OK).json({
            accessToken: accessToken,
            userId: foundUser._id,
            username: foundUser.username,
            expTime: tokenOptions.expiresIn,
            role: foundUser.role,
            message: 'Login success'
        });
    });
};
// userName
// userId
// expTime
// role
// accessToken
// message