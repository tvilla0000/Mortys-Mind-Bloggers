const express = require('express');
const commentsCtrl = require('../controllers/comments');
const router = express.Router();

router.get('/', commentsCtrl.index);
router.post('/', commentsCtrl.create);
router.get('/:id', commentsCtrl.show);
router.delete('/:id', commentsCtrl.delete);
router.put('/:id/edit', commentsCtrl.update);
router.get('/:id/edit', commentsCtrl.editComment);



module.exports = router;

