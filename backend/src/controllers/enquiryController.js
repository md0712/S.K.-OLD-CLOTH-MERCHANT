const db = require('../config/db');
const logger = require('../utils/logger');

exports.create = (req, res) => {
  const enquiry = {
    ...req.body,
    status: 'new',
    ip: req.ip || req.socket.remoteAddress
  };

  const saved = db.insert('enquiries', enquiry);
  logger.info(`New enquiry received from ${saved.name} (${saved.phone}) for ${saved.category}`);

  res.status(201).json({
    success: true,
    message: 'Enquiry submitted successfully. Our team will contact you shortly.',
    data: { id: saved.id, createdAt: saved.createdAt }
  });
};

exports.getAll = (req, res) => {
  const enquiries = db.get('enquiries');
  res.json({ success: true, count: enquiries.length, data: enquiries });
};

exports.updateStatus = (req, res) => {
  const { status } = req.body;
  const updated = db.update('enquiries', req.params.id, { status });
  if (!updated) return res.status(404).json({ success: false, message: 'Enquiry not found' });
  res.json({ success: true, message: 'Status updated', data: updated });
};

exports.delete = (req, res) => {
  const success = db.delete('enquiries', req.params.id);
  if (!success) return res.status(404).json({ success: false, message: 'Enquiry not found' });
  res.json({ success: true, message: 'Enquiry deleted' });
};
