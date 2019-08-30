const express = require('express');
const router = express.Router;
const episodesCtrl = require('../controllers/episodes');

router.post('/', episodesCtrl.create);