const Token = require('./token');

const decodeCookie = async (req) => {
    const accessToken = req.cookies.access_token;
    const token = Token.decodedToken(accessToken);
    return token;
};

module.exports = {
    decodeCookie
};
