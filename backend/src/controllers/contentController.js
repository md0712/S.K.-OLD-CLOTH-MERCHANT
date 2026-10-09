const db = require('../config/db');

exports.getContent = (req, res) => {
  const content = db.data.websiteContent || {};
  res.json({ success: true, data: content });
};

exports.updateContent = (req, res) => {
  db.data.websiteContent = { ...(db.data.websiteContent || {}), ...req.body };
  db.saveData();
  res.json({ success: true, message: 'Website content updated', data: db.data.websiteContent });
};
