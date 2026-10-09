const db = require('../config/db');

exports.getAll = (req, res) => {
  const { category } = req.query;
  let items = db.get('gallery');
  if (category && category !== 'All') {
    items = items.filter(i => i.category === category);
  }
  res.json({ success: true, count: items.length, data: items });
};

exports.create = (req, res) => {
  const newItem = db.insert('gallery', req.body);
  res.status(201).json({ success: true, message: 'Gallery item added', data: newItem });
};

exports.delete = (req, res) => {
  const success = db.delete('gallery', req.params.id);
  if (!success) return res.status(404).json({ success: false, message: 'Item not found' });
  res.json({ success: true, message: 'Item deleted' });
};
