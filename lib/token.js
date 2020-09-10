const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET_KEY;

const generateToken = (payload) =>
    jwt.sign(payload, jwtSecret, {
        expiresIn: '7d',
    });

const decodedToken = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (e) {
        return null;
    }
};

const jwtMiddleware = async (req, res, next) => {
    const token = req.cookies.access_cookie;
    if (!token) return next();

    req.user = decodedToken(token);
};

module.exports = {
    jwtMiddleware,
    generateToken,
    decodedToken,
};
