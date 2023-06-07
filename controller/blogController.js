const { connection } = require("../DB/conn");


const getPostController = (req, res) => {
    try {
        const q = req.query.category ? "SELECT * FROM  posts where category=?" : "SELECT * FROM  posts";
        connection.query(q, [req.query.category], (err, value) => {
            if (err) return res.json({ success: false, message: "Error when fetching data" });
            res.json({ success: true, message: "Posts fetched", value });
        })
    } catch (error) {
        res.json({ success: false, message: "Internal Server Error" });
    }
}

const getOnePostController = (req, res) => {
    try {
        
        const q = "SELECT p.id as idey,u.id,`name`,`title`,`description`,p.image,`category`,`date` FROM users u JOIN posts p ON u.id=p.uid where p.id=?";
        connection.query(q, [req.params.id], (err, value) => {
            if (err) return res.json({ success: false, message: "Error when fetching data",err });
            return res.json({ success: true, message: "Posts fetched", datas: value[0] });
            
        })
    } catch (error) {
        res.json({ success: false, message: "Internal Server Error" });
    }
}
const createPostController = (req, res) => {
    res.send("Hey");
}
const deltePostController = (req, res) => {
    try {
        const postId = req.params.id;
        const { uid } = req.body;
        console.log(uid)
        console.log(req.body.uid)
        const query = "Delete from posts where `id`=? AND `uid`=?";
        connection.query(query, [postId, uid], (err, value) => {
            if (err) return res.json({ success: false, message: "Error while deleting", err });
            res.json({ success: true, message: "Successfully Deleted", value });
        })

    
    } catch (error) {
        res.json({ success: false, message: "internal server error", error });
    }
}
const updatePostController = (req, res) => {
    try {
       
    
   } catch (error) {
       res.json({ success: false, message: "internal server error", error });
   }
}

module.exports = { getPostController,getOnePostController,createPostController,deltePostController,updatePostController };