const express = require('express');
const commentsCtrl = require('../controllers/comments');
const router = express.Router();

router.get('/', commentsCtrl.index);
router.post('/', commentsCtrl.create);
router.get('/:id', commentsCtrl.show);
router.delete('/comments/:id', commentsCtrl.delete);


module.exports = router;

