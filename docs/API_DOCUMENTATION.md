# S.K. OLD CLOTH MERCHANT — REST API Documentation

Base URL: `http://localhost:5000/api`

---

## 1. Authentication Endpoints

### `POST /auth/login`
- **Description:** Authenticates administrator and returns bearer JWT token.
- **Request Body:**
  ```json
  {
    "email": "admin@skoldclothmerchant.com",
    "password": "admin123"
  }
  ```
- **Response (200):**
  ```json
  {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "usr-1",
      "name": "Administrator",
      "email": "admin@skoldclothmerchant.com",
      "role": "admin"
    }
  }
  ```

---

## 2. Customer Enquiries Endpoints

### `POST /enquiries` (Public, Rate Limited)
- **Description:** Submits customer enquiry or quotation request.
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "name": "Shakir Ahmed",
    "businessName": "Madurai Textiles",
    "phone": "+91 94443 53151",
    "whatsapp": "+91 94443 53151",
    "category": "Men’s Clothing",
    "quantity": "5 Bales",
    "location": "Madurai, Tamil Nadu",
    "message": "Need pricing for Grade A denim and cotton shirts."
  }
  ```
- **Response (201):**
  ```json
  {
    "success": true,
    "message": "Enquiry submitted successfully. Our team will contact you shortly.",
    "data": { "id": "id-...", "createdAt": "2026-10-08T..." }
  }
  ```

### `GET /enquiries` (Protected)
- **Headers:** `Authorization: Bearer <token>`
- **Response (200):** Array of all customer leads.

### `PUT /enquiries/:id/status` (Protected)
- **Headers:** `Authorization: Bearer <token>`
- **Request Body:** `{ "status": "contacted" | "quoted" | "completed" }`

---

## 3. Product Catalog Endpoints

### `GET /products`
- **Query Params:** `?categoryId=mens-clothing`
- **Response (200):** Array of products with bale weights, estimated pieces, and grades.

### `POST /products` (Protected)
- **Creates new product in catalog.**

---

## 4. Categories & Content Endpoints

- `GET /categories`: Returns all 6 active cloth categories.
- `GET /gallery`: Returns gallery items with category filter.
- `GET /content`: Returns live CMS parameters.
- `GET /dashboard/stats`: Returns lead counts and inventory overview.
