function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/[<>]/g, '');
}

function validateEnquiry(req, res, next) {
  const { name, phone } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ success: false, message: 'Valid name is required (min 2 characters)' });
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
    return res.status(400).json({ success: false, message: 'Valid phone number is required' });
  }

  req.body.name = sanitizeString(req.body.name);
  req.body.businessName = sanitizeString(req.body.businessName);
  req.body.phone = sanitizeString(req.body.phone);
  req.body.whatsapp = sanitizeString(req.body.whatsapp);
  req.body.category = sanitizeString(req.body.category);
  req.body.quantity = sanitizeString(req.body.quantity);
  req.body.location = sanitizeString(req.body.location);
  req.body.message = sanitizeString(req.body.message);

  next();
}

module.exports = { validateEnquiry, sanitizeString };
