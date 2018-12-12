const httpStattus = require('http-status');
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token) {
        return res.status(httpStattus.UNAUTHORIZED).json({ message: 'Access token is required' });
    }
    jwt.verify(token, config.auth.jwt.secretKey, (err, decoded) => {
        if (err) {
            return res.status(httpStattus.UNAUTHORIZED).json({ message: 'The token is invalid' });
        }
        req.decoded = decoded;
        next();
    });
};