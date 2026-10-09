const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');
const authMiddleware = require('../middleware/authMiddleware');
const rateLimit = require('../middleware/rateLimitMiddleware');
const { validateEnquiry } = require('../middleware/validationMiddleware');

// Public submission with rate limiting and validation
router.post('/', rateLimit({ maxRequests: 10, windowMs: 60000 }), validateEnquiry, enquiryController.create);

// Admin protected endpoints
router.get('/', authMiddleware, enquiryController.getAll);
router.put('/:id/status', authMiddleware, enquiryController.updateStatus);
router.delete('/:id', authMiddleware, enquiryController.delete);

module.exports = router;
