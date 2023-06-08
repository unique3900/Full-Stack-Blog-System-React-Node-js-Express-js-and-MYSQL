
const { connection } = require("../DB/conn");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require("../Middleware/authMiddleware");
const loginController = (req, res) => {
    try {
        
        if (!req.body.email || !req.body.password) {
            res.json({ success: false, message: "Both email and password is required" });
        }
        const query = "select * from users where email=?";
        connection.query(query, [req.body.email], (err, data) => {
            if (err) return res.json({ success: false, message: "Error when fetching data" });
            if (data.length <= 0) return res.json({ success: false, message: "User not Found" });
            
            const comparePwd = bcrypt.compareSync(req.body.password, data[0].password );
            
            if (!comparePwd)
                return res.json({success:false,message:"Incorrect Password!"})
            
            const {  password, ...other } = data[0];
            // const token=generateToken(res, data[0].id,other);
     
            const userId = data[0].id;
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
            }).cookie('DemoSSSS', 'denioiw8w').json({ success: true, message: "Successfully Generated access token",other,token });
            
            
            
            
        })
    } catch (error) {
        console.log("Internal Server Error" + error);
    }
}

const registerController = (req, res) => {
    try {
        const { email, password ,name } = req.body;
        
        const query = "Select * from users where email=?";
        connection.query(query, [email], (error, data) => {
            if (error) return res.json({ success: false, message: "Error Occured in fetching",error });
            if (data.length) return res.json({ success: false, message: "User Already Exist" });

            //Hash the password
            const hashedPassword = bcrypt.hashSync(password, 10);
            const insertQuery = "Insert into users(`email`,`password`,`name`) values(?) ";

            const values = [email, hashedPassword, name];
            connection.query(insertQuery, [values], (err, data) => {
                if (err) return res.json({ success: false, message: "Error Occured in fetching",err });
                return res.json({ success: true, message: "User Inserted Successfully" });
            })
        })
    } catch (error) {
        console.log("Internal Server Error" + error);
    }
}

const changePasswordController = (req, res) => {
    res.send("Change Password Controller");
    console.log(req.user)
}
const logoutController = (req, res) => {
    try {
        res.cookie('access_token', '', {
            httpOnly: true,
            expires: new Date(0)
        }).json({message:"User Logged Out"})
    } catch (error) {
        console.log("Internal Server Error" + error);
    }
}


module.exports={loginController,registerController,changePasswordController,logoutController}