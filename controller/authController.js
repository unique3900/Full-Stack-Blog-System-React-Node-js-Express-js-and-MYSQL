
const { connection } = require("../DB/conn");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
            const webtoken = jwt.sign({ id: data[0].id }, "SECRETKEY");
            res.cookie("accessToken", webtoken, {
                httpOnly:true
            }).json({ message: "User Validated", other,webtoken });
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



module.exports={loginController,registerController}