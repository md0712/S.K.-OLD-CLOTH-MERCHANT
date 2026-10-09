export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Our Products",
    path: "/products",
    dropdown: [
      {
        name: "All Collections",
        path: "/products",
        badge: "Full Stock",
        description: "Browse all sorted garments & bale inventory"
      },
      {
        name: "Men’s Clothing",
        path: "/products?category=mens-clothing",
        description: "T-Shirts, formal shirts, denim jeans, chinos"
      },
      {
        name: "Women’s Clothing",
        path: "/products?category=womens-clothing",
        description: "Tops, dresses, denim, daily & casual wear"
      },
      {
        name: "Kids’ Clothing",
        path: "/products?category=kids-clothing",
        description: "Clean sorted all-age children's apparel"
      },
      {
        name: "Jackets & Hoodies",
        path: "/products?category=jackets-hoodies",
        description: "Winter fleeces, zip hoodies, outerwear"
      },
      {
        name: "Garments & Fabric",
        path: "/products?category=garments-fabric",
        description: "Bulk cottons, denim cuts & industrial bales"
      },
      {
        name: "Shoes & Accessories",
        path: "/products?category=shoes-accessories",
        description: "Footwear, handbags, belts, caps"
      }
    ]
  },
  {
    name: "Services & Process",
    path: "/wholesale-retail",
    dropdown: [
      {
        name: "Wholesale & Retail Supply",
        path: "/wholesale-retail",
        badge: "B2B / B2C",
        description: "Compressed bales (45-100kg) & store bundles"
      },
      {
        name: "Quality & 9-Step Process",
        path: "/quality-process",
        description: "Sanitization, sorting & defect inspection"
      },
      {
        name: "Internship & Training",
        path: "/internship",
        badge: "New",
        description: "Academic & field training in circular textiles"
      }
    ]
  },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" }
];
