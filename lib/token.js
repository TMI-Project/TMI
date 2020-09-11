const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET_KEY;

const generateToken = (payload) =>
    jwt.sign(payload, jwtSecret, {
        expiresIn: '7d',
    });//jwt 생성

const decodedToken = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (e) {
        return null;
    }
};//jwt 해석

const jwtMiddleware = async (req, res, next) => {
    const token = req.cookies.access_cookie;
    if (!token) return next();

    req.user = decodedToken(token);
};//jwt 미들웨어

module.exports = {
    jwtMiddleware,
    generateToken,
    decodedToken,
};
