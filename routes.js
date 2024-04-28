const express = require('express');
const router = express.Router();
const serviceRequestRoutes = require('./routes/serviceRequestRoutes');
const accountRoutes = require('./routes/accountRoutes');

// Register service request routes
router.use('/requests', serviceRequestRoutes);

// Register account routes
router.use('/accounts', accountRoutes);

module.exports = router;
