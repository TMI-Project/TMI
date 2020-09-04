const jwtSecret = process.env.JWT_SECRET_KEY;
const jwt = requrie('jsonwebtoken');

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
};

exports.generateToken = generateToken;