const jwt = require('jsonwebtoken');

const generateToken = (res, userId) => {
    console.log(userId);
    const token = jwt.sign({
        userId
    }, "JWTSECRET", {
        expiresIn: '2d'

    });

    res.cookie("access_token", token, {
        httpOnly: true,
        sameSite: 'none',
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    })



}
const authProtect = (req, res, next) => {
    const token = req.cookies.access_token;
    if (token) {
        try {
            console.log("My token" + token);
            next();
        } catch (error) {
            console.log("Internal server error at token")
        }

    }
    else {
        res.json({message:"Unauthorized access , Invalid token"})
    }

}

module.exports = {
    generateToken,
    authProtect
}
