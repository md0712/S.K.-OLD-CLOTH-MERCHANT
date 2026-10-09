USE `sk_old_cloth_merchant`;

-- Seed Admin User (Password: admin123)
INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `status`) VALUES
('usr-admin-01', 'Admin S.K. Cloth', 'admin@skoldclothmerchant.com', '$2b$10$wK1Wv6pX1234567890abcdefghijklmnopqrstuvwxyz123456789', 'admin', 'active')
ON DUPLICATE KEY UPDATE `email`=`email`;

-- Seed Categories
INSERT INTO `categories` (`id`, `name`, `slug`, `tagline`, `description`, `image`, `items_json`, `bale_specs`, `grade`, `display_order`) VALUES
('mens-clothing', 'Men’s Clothing', 'mens-clothing', 'Quality sorted everyday & casual wear for men', 'Extensive selection of graded men\'s apparel including branded t-shirts, formal shirts, denim jeans, and comfortable casual wear.', '/images/products/men.jpg', '["T-Shirts", "Shirts", "Jeans", "Trousers", "Casual Wear"]', '45kg - 55kg compressed bales', 'Grade A', 1),
('womens-clothing', 'Women’s Clothing', 'womens-clothing', 'Vibrant tops, dresses, and contemporary styles', 'Carefully inspected women\'s fashion wear with vibrant colors, intact stitching, and comfortable daily fabrics.', '/images/products/women.jpg', '["Tops", "Dresses", "Jeans", "Leggings", "Casual Wear"]', '45kg - 50kg compressed bales', 'Grade A', 2),
('kids-clothing', 'Kids’ Clothing', 'kids-clothing', 'Durable, clean, and gentle everyday kids wear', 'Sorted children\'s clothing from toddlers to teens, washed and clean, free from tears and heavy stains.', '/images/products/kids.jpg', '["T-Shirts", "Dresses", "Shorts", "Jeans", "Kids Wear"]', '40kg - 45kg compressed bales', 'Grade A Clean', 3),
('jackets-hoodies', 'Jackets & Hoodies', 'jackets-hoodies', 'Heavyweight winter wear and windcheaters', 'Substantial winter collection including fleece pullovers, zip-up hoodies, denim jackets, and weather-resistant overcoats.', '/images/products/jackets.jpg', '["Jackets", "Sweatshirts", "Hoodies", "Fleeces", "Winter Wear"]', '45kg - 55kg bales', 'Grade A Heavy', 4),
('garments-fabric', 'Garments & Fabric', 'garments-fabric', 'Bulk sorted textiles, cottons, and denims', 'Bales of assorted fabric materials, raw denim cuts, pure cotton apparel, and polyester blends ideal for bulk traders.', '/images/products/garments.jpg', '["Mixed Bales", "Cotton", "Denim", "Polyester", "Textile Materials"]', '50kg - 100kg bales', 'Standard Industrial', 5),
('shoes-accessories', 'Shoes & Accessories', 'shoes-accessories', 'Sorted footwear, belts, bags, and caps', 'Assorted accessories and wearable pairs carefully paired, sanitized, and packed for retail and secondhand markets.', '/images/products/shoes.jpg', '["Footwear", "Bags", "Belts", "Caps", "Accessories"]', '25kg - 40kg cartons', 'Matched Pairs', 6)
ON DUPLICATE KEY UPDATE `name`=`name`;

-- Seed Initial Products
INSERT INTO `products` (`id`, `category_id`, `name`, `grade`, `bale_weight`, `est_pieces`, `image`, `description`, `wholesale_availability`, `retail_availability`) VALUES
('prod-mens-tshirts', 'mens-clothing', 'Men\'s Branded T-Shirts Bale', 'Grade A', '45 kg', '180 - 210 pcs', '/images/products/men.jpg', 'Premium cotton round-neck and polo t-shirts in clean, sorted condition with vibrant colors and intact collars.', 'Immediate Dispatch', 'Available at Choolai Hub'),
('prod-mens-jeans', 'mens-clothing', 'Men\'s Denim Jeans Bales', 'Grade A', '50 kg', '75 - 90 pcs', '/images/products/men.jpg', 'Sturdy branded denim jeans in straight, slim, and relaxed cuts. Clean pockets, working zippers, and strong seams.', 'In Stock (Regular Supply)', 'Available'),
('prod-womens-tops', 'womens-clothing', 'Women\'s Western Tops & Blouses', 'Grade A', '45 kg', '200 - 240 pcs', '/images/products/women.jpg', 'Contemporary lightweight tops, floral blouses, tunics, and casual everyday wear for women.', 'Regular supply available', 'Available in Choolai')
ON DUPLICATE KEY UPDATE `name`=`name`;

-- Seed Website Content
INSERT INTO `website_content` (`key`, `value`, `group_name`) VALUES
('company_name', 'S.K. OLD CLOTH MERCHANT', 'general'),
('company_phone', '+91 94443 53151', 'general'),
('company_email', 'skoldclothsupplier@gmail.com', 'general'),
('company_location', 'Choolai, Chennai – 600112', 'general'),
('company_tagline', 'Quality Used Clothing • Wholesale & Retail', 'general'),
('hero_title', 'TRUST • QUALITY • AFFORDABLE', 'homepage'),
('hero_description', 'Your reliable partner for quality pre-owned clothing, bulk supply and retail requirements in Chennai.', 'homepage')
ON DUPLICATE KEY UPDATE `value`=VALUES(`value`);
