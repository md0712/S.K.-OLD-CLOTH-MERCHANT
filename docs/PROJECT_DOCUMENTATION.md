# S.K. OLD CLOTH MERCHANT — Project Documentation

## 1. Executive Summary

- **Business Name:** S.K. OLD CLOTH MERCHANT
- **Business Type:** Used / Pre-Owned Clothing Wholesale & Retail Supplier
- **Location:** Choolai, Chennai – 600112, Tamil Nadu, India
- **Established:** 2017 (9+ Years in Operation)
- **Tagline:** *“Quality Used Clothing • Wholesale & Retail”*
- **Brand Message:** *“Trusted Quality. Affordable Prices. Reliable Supply.”*
- **Phone:** +91 94443 53151
- **Email:** skoldclothsupplier@gmail.com

---

## 2. Design System & Aesthetics

1. **Color Palette:**
   - **Deep Forest Green (`#0d2818`, `#16422b`):** Conveys trust, heritage, sustainability, and wholesale authority.
   - **Soft Beige & Warm Sand (`#faf8f5`, `#f4f0e6`, `#eae3d2`):** Elegant neutral backdrop echoing textile textures.
   - **Emerald Accent (`#10b981`, `#25D366`):** Vibrant focus cues and official WhatsApp brand connection.
   - **Charcoal & Slate (`#1a2920`, `#334155`):** High contrast readability for technical specifications.

2. **Typography Hierarchy:**
   - **Headings:** *Playfair Display* (Editorial luxury serif providing dignity to the established business).
   - **Body:** *Plus Jakarta Sans* (Modern geometric sans-serif offering maximum legibility on mobile screens).

3. **Motion & Interaction:**
   - Smooth hover elevation (`hover-lift`) with subtle multi-layer drop shadows.
   - Micro-interaction glows on CTAs.
   - Lightbox modal with keyboard shortcuts (Escape, Left, Right).
   - Contextual WhatsApp dispatch across product categories.

---

## 3. Architecture & Codebase Map

```
sk-old-cloth-merchant/
├── frontend/             # High-performance React 19 + Vite + Tailwind CSS Website
│   ├── public/           # Favicon, robots.txt, sitemap.xml, reference photography
│   └── src/
│       ├── components/   # Common, Layout, Home, Products, Process, Gallery, Contact
│       ├── data/         # Categories, products, process steps, gallery, company details
│       ├── pages/        # Home, About, Products, WholesaleRetail, QualityProcess, Gallery, Contact
│       └── utils/        # WhatsApp deep linking, formatters, validation
│
├── backend/              # Express.js REST API service with rate limiting and logging
│   └── src/
│       ├── config/       # Environment, CORS, DB persistence
│       ├── controllers/  # Auth, Products, Categories, Gallery, Enquiries, Content
│       ├── middleware/   # JWT verification, IP rate limiting, input sanitization
│       └── routes/       # Clean modular REST endpoints
│
├── admin/                # Responsive React Admin Management Portal
│   └── src/
│       ├── pages/        # Dashboard, Enquiries, Products, Categories, Gallery, CMS, SEO
│       └── services/     # API client with token management and offline fallbacks
│
├── database/             # Relational schema, migration scripts, and seed data
│   ├── schema.sql
│   ├── seed.sql
│   └── migrations/       # 001_users to 006_website_content
│
└── docs/                 # Complete operational guides and API specifications
```

---

## 4. Key Website Features

1. **Top Contact Bar:** Click-to-call, email, location link, and quick WhatsApp trigger.
2. **Sticky Header:** Compact on scroll with glassmorphism blur and direct "Get a Quote" modal trigger.
3. **Cinematic Hero:** Real warehouse photography with gradient overlays and multiple call-to-actions.
4. **Trust / USP Cards:** Quality Checked, Competitive Prices, Timely Delivery, Long-Term Partnership.
5. **6 Core Product Categories:** Men's, Women's, Kids', Jackets & Hoodies, Garments & Fabric, Shoes & Accessories.
6. **Featured Warehouse Split:** Highlighting stock scale, Choolai hub, and 4 key statistics.
7. **9-Stage Process Timeline:** Intake -> Inspection -> Grading -> Packing -> Labeling -> Dispatch -> Loading -> Transit -> Delivery.
8. **Dual Pillar Supply Panels:** Separate detailed breakdowns for Wholesale Bulk Buyers and Retail Customers.
9. **Bento/Masonry Gallery with Lightbox:** Full category filtering (Warehouse, Men, Women, Kids, Bales, Packing, Dispatch).
10. **Interactive Lead Capture Form:** Client-side validation, backend recording, and immediate WhatsApp pre-fill.
11. **Mobile Experience:** Sticky bottom action bar (Call, WhatsApp, Enquiry), touch-optimized controls, fast asset delivery.
