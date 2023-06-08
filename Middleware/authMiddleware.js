const jwt = require('jsonwebtoken');
const store = require('store');


const authProtect = (req, res, next) => {
   
    try {
        console.log(req.headers.authorization);
            jwt.verify(req.headers.authorization, "JWTSECRET", (err, userInfo) => {
                if (err) return res.json({ success: false, message: "Error in authenticating token",err });
                req.user = userInfo;
                next();
        });
        
           
        } catch (error) {
            console.log("Internal server error at token")
        }

    


}

module.exports = {
    
    authProtect
}
