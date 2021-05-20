const express = require('express');
const router = express.Router();
const controller = require('../controllers/search.controller');

router.get('/', controller.list);
router.get('/:id', controller.find);
router.get('/:id/description', controller.description);

module.exports = router;