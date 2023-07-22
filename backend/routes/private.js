// blur plugin for video ?
const express = require('express');
const router = express.Router();

const { getSource, getGuide } = require('../controllers/privateController')


router.get('/source', getSource);
router.get('/guide', getGuide);

module.exports = router;