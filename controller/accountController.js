const customerAccounts = require('../models/customerAccounts');

exports.getAccount = (req, res) => {
    const customerId = req.params.customerId;
    const account = customerAccounts[customerId];
    if (!account) {
        res.status(404).json({ message: 'Account not found' });
    } else {
        res.status(200).json({ account });
    }
};

exports.updateAccount = (req, res) => {
    const customerId = req.params.customerId;
    const updatedInfo = req.body;
    if (!customerAccounts[customerId]) {
        res.status(404).json({ message: 'Account not found' });
    } else {
        customerAccounts[customerId] = { ...customerAccounts[customerId], ...updatedInfo };
        res.status(200).json({ message: 'Account updated successfully', account: customerAccounts[customerId] });
    }
};
