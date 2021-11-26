const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (payload, expires) {
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: expires });
}