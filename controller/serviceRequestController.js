const serviceRequests = require('../models/serviceRequests');

exports.submitRequest = (req, res) => {
    const { type, details } = req.body;
    if (!type ||!details) {
        return res.status(400).json({ message: 'Please provide type and details' });
    }
    const newRequest = {
        id: serviceRequests.length + 1,
        type,
        details,
        status: 'Pending',
        submittedAt: new Date()
    };
    serviceRequests.push(newRequest);
    res.status(201).json({ message: 'Service request submitted successfully', request: newRequest });
};

exports.getRequestStatus = (req, res) => {
    const requestId = parseInt(req.params.id);
    const request = serviceRequests.find(req => req.id === requestId);
    if (!request) {
        res.status(404).json({ message: 'Request not found' });
    } else {
        res.status(200).json({ request });
    }
};
