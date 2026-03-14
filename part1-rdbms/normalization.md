## Anomaly Analysis
Because the dataset stores orders, customers, products and sales representatives in a single table, several anomalies occur.

### 1. Insert Anomaly

Example:
Row 1:
Order Id : ORD1114
Product Id : P007
Product Name: Pen Set

Problem:
If the company wants to add new product but no order has been placed, it cannot be inserted without creating fake product.

Columns involved:
product_id, product_name, category,unit_price

Reason:
Product information depends on product_id  but it exists only when order exists.

### 2. Update Anomaly

