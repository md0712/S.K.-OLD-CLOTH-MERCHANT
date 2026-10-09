require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  JWT_SECRET: process.env.JWT_SECRET || 'sk-old-cloth-merchant-super-secret-key-2026',
  CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'admin@skoldclothmerchant.com',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'admin123',
  WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER || '919444353151',
  BUSINESS_EMAIL: process.env.BUSINESS_EMAIL || 'skoldclothsupplier@gmail.com'
};
