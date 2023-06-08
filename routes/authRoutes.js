const express = require('express');
const { loginController, registerController, changePasswordController, logoutController } = require('../controller/authController');
const { authProtect, isMyUser } = require('../Middleware/authMiddleware');

const router = express();

router.post('/login', loginController);
router.post('/register', registerController);
router.post('/logout', logoutController);
router.post('/change-password', authProtect, changePasswordController);
router.get('/user-auth', authProtect, (req, res) => {
    res.json({ valid: true });
});

module.exports = router;