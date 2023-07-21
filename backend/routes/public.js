const express = require('express');
const router = express.Router();

const { getStory } = require('../controllers/publicController')


router.get('/', getStory);
// router.get('/about-me', getInfoAboutMe);

module.exports = router;