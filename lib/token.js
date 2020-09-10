const jwtSecret = process.env.JWT_SECRET_KEY;
const jwt = require('jsonwebtoken');

function generateToken(payload){
    return new Promise(
        (resolve, reject) => {
            jwt.sign(
                payload,
                jwtSecret,
                {
                    expiresIn:'7d'
                }, (error, token) => {
                    if(error) reject(error);
                    resolve(token)
                }
            );
        }
    );
}

function decodeToken(token){
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, jwtSecret, (error, decoded) => {
                if(error) reject(error);
                resolve(decoded);
            });
        }
    );
}

exports.jwtMiddleware = async function(req, res, next) {
    const token = req.cookies.access_cookie;
    if(!token) { return next(); }

    try {
        const decoded = await decodeToken(token);

        req.user = decoded;
    } catch (e) {
        req.user = null;
    }
};

exports.generateToken = generateToken;