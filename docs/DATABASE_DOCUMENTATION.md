# S.K. OLD CLOTH MERCHANT — Database Documentation

## 1. Overview
The database architecture supports a hybrid deployment model:
1. **Production Relational Database:** Designed for MySQL 8.0+ / MariaDB / Amazon RDS / Google Cloud SQL with ACID compliance and foreign key constraints.
2. **Local Persistence Store:** A structured JSON store (`data_store.json`) for zero-dependency rapid local execution.

---

## 2. Entity Relationship Summary

- **users:** Administrator and staff login accounts with hashed credentials and role permissions.
- **categories:** The 6 fundamental clothing categories (Men's, Women's, Kids', Jackets, Fabrics, Shoes).
- **products:** Specific bale stock lots mapped to parent categories with piece estimates and grading tags.
- **gallery:** Photographic inventory images mapped to warehouse categories.
- **enquiries:** Customer leads from web quotation forms with status workflow (`new`, `contacted`, `quoted`, `completed`).
- **website_content:** CMS key-value configurations for dynamic updates to phone numbers, announcements, and hero copy.

---

## 3. Migration Files List

1. `001_users.sql`
2. `002_categories.sql`
3. `003_products.sql`
4. `004_gallery.sql`
5. `005_enquiries.sql`
6. `006_website_content.sql`
