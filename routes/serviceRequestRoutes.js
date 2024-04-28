const express = require('express');
const router = express.Router();
const serviceRequestController = require('./controllers/serviceRequestController');

router.post('/', serviceRequestController.submitRequest);
router.get('/:id', serviceRequestController.getRequestStatus);

module.exports = router;
