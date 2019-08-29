const express = require('express');
const commentsCtrl = require('../controllers/comments');
const router = express.Router();

router.get('/', commentsCtrl.index);
router.post('/new', commentsCtrl.create);


module.exports = router;

