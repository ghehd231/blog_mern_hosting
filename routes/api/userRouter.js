const express = require('express');
const router = express.Router();

/**
 * @route   GET api/user/test
 * @desc    Test user route
 * @access  Public
 */
router.get('/test', (req, res) => res.json({msg: 'userRouter Works'}));

module.exports = router; 