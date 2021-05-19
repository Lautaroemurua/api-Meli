const express = require('express');
const router = express.Router();
const controller = require('../controllers/search.controller');

router.get('/', controller.list);
router.get('/:id', controller.find);

module.exports = router;