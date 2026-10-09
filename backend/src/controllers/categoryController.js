const db = require('../config/db');

exports.getAll = (req, res) => {
  const categories = db.get('categories');
  res.json({ success: true, count: categories.length, data: categories });
};

exports.getById = (req, res) => {
  const category = db.find('categories', c => c.id === req.params.id);
  if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
  res.json({ success: true, data: category });
};

exports.create = (req, res) => {
  const newCat = db.insert('categories', req.body);
  res.status(201).json({ success: true, message: 'Category created', data: newCat });
};

exports.update = (req, res) => {
  const updated = db.update('categories', req.params.id, req.body);
  if (!updated) return res.status(404).json({ success: false, message: 'Category not found' });
  res.json({ success: true, message: 'Category updated', data: updated });
};

exports.delete = (req, res) => {
  const success = db.delete('categories', req.params.id);
  if (!success) return res.status(404).json({ success: false, message: 'Category not found' });
  res.json({ success: true, message: 'Category deleted' });
};
