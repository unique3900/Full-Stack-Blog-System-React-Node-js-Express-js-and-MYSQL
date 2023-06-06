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
        
        const q = "SELECT * FROM  posts where id=?";
        connection.query(q, [req.params.id], (err, value) => {
            if (err) return res.json({ success: false, message: "Error when fetching data" });
            res.json({ success: true, message: "Posts fetched", value });
        })
    } catch (error) {
        res.json({ success: false, message: "Internal Server Error" });
    }
}
const createPostController = (req, res) => {
    res.send("Hey");
}
const deltePostController = (req, res) => {
    res.send("Hey");
}
const updatePostController = (req, res) => {
    res.send("Hey");
}

module.exports = { getPostController,getOnePostController,createPostController,deltePostController,updatePostController };