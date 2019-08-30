const express = require('express');
const episodesCtrl = require('../controllers/episodes');
const router = express.Router();

router.post('/', episodesCtrl.create);
router.get('/:id', episodesCtrl.show)

module.exports = router;
