const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', contentController.getContent);
router.put('/', authMiddleware, contentController.updateContent);

module.exports = router;
