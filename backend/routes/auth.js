const express = require('express');
const router = express.Router();

const { register, auth } = require('../controllers/authController')

router.post('/', auth);
router.post('/new', register);

module.exports = router;