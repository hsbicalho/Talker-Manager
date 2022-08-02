const crypto = require('crypto');

function loginToken() {
    return crypto.randomBytes(8).toString('hex');
}

module.exports = loginToken;
