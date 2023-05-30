const { connection } = require("../DB/conn");
const bcrypt = require('bcrypt');
const loginController = (req, res) => {
    try {
        if (connection) {
            res.json({message:"Connection created"})
        }
        res.send("Message From Login Controller");
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