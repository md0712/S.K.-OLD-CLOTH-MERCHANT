const db = require('../config/db');

exports.getStats = (req, res) => {
  const enquiries = db.get('enquiries');
  const products = db.get('products');
  const categories = db.get('categories');
  const gallery = db.get('gallery');

  const newEnquiries = enquiries.filter(e => e.status === 'new').length;
  const contactedEnquiries = enquiries.filter(e => e.status === 'contacted').length;

  res.json({
    success: true,
    data: {
      totalEnquiries: enquiries.length,
      newEnquiries,
      contactedEnquiries,
      totalProducts: products.length,
      totalCategories: categories.length,
      totalGalleryImages: gallery.length,
      recentEnquiries: enquiries.slice(0, 5)
    }
  });
};
