// blur plugin for video ?
const express = require('express');
const router = express.Router();

const { getSource, getGuide, getUserReview, sendUserReview } = require('../controllers/privateController');


router.get('/source', getSource);
router.get('/guide', getGuide);
router.get('/review', getUserReview);
router.post('/review/new', sendUserReview);

module.exports = router;