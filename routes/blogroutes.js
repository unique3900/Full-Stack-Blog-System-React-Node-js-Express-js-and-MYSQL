const express = require('express');
const { getAllPostController, getOnePostController, createPostController, updatePostController, deltePostController, getPostController } = require('../controller/blogController');
const { authProtect } = require('../Middleware/authMiddleware');
const cors = require('cors');
const router = express();
router.use(cors());
router.get('/posts', getPostController);
router.get('/post/:id', getOnePostController);
router.post('/new-post', createPostController);
router.post('/update-post/:id',authProtect, updatePostController);
router.delete('/delete-post/:id/:uid', authProtect, deltePostController);

module.exports = router;