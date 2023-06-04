const express = require('express');
const { getAllPostController, getOnePostController, createPostController, updatePostController, deltePostController, getPostController } = require('../controller/blogController');
const { authProtect } = require('../Middleware/authMiddleware');

const router = express();

router.get('/posts', getPostController);
router.get('/post.:id', getOnePostController);
router.post('/new-post', createPostController);
router.post('/update-post/:id',authProtect, updatePostController);
router.post('/delete-post/:id', authProtect, deltePostController);

module.exports = router;