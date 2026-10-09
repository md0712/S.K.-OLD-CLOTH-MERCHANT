const db = require('../config/db');

exports.getAll = (req, res) => {
  const { categoryId } = req.query;
  let products = db.get('products');
  if (categoryId) {
    products = products.filter(p => p.categoryId === categoryId);
  }
  res.json({ success: true, count: products.length, data: products });
};

exports.getById = (req, res) => {
  const product = db.find('products', p => p.id === req.params.id);
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, data: product });
};

exports.create = (req, res) => {
  const newProduct = db.insert('products', req.body);
  res.status(201).json({ success: true, message: 'Product created', data: newProduct });
};

exports.update = (req, res) => {
  const updated = db.update('products', req.params.id, req.body);
  if (!updated) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, message: 'Product updated', data: updated });
};

exports.delete = (req, res) => {
  const success = db.delete('products', req.params.id);
  if (!success) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, message: 'Product deleted' });
};
