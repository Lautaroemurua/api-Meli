const express = require('express');
const router = express.Router();
const controller = require('../controllers/search.controller');

router.get('/', controller.list);
router.get('/:id', controller.description);

module.exports = router;