const Token = require('./token');

const decodeCookie = async (req) => {//Decode cookie
    const accessToken = req.cookies.access_token;
    const token = Token.decodedToken(accessToken);
    return token;
};

const findAccount_idAtCookie = async (req) => {
    const accessToken = req.cookies.access_token;
    const token = await Token.decodedToken(accessToken);
    console.log("token");
    console.log(token);
    return token._id;

}
module.exports = {
    decodeCookie,
    findAccount_idAtCookie
};
