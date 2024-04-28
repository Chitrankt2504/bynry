const express = require('express');
const router = express.Router();
const accountController = require('./controllers/accountController');

router.get('/:customerId', accountController.getAccount);
router.put('/:customerId', accountController.updateAccount);

module.exports = router;
