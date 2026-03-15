-- CUSTOMERS TABLE
CREATE TABLE customers (
    customer_id VARCHAR(10) PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    customer_city VARCHAR(50) NOT NULL
);

-- PRODUCTS TABLE
CREATE TABLE products (
    product_id VARCHAR(10) PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL
);

-- SALES REPRESENTATIVES TABLE
CREATE TABLE sales_reps (
    sales_rep_id VARCHAR(10) PRIMARY KEY,
    sales_rep_name VARCHAR(100) NOT NULL,
    sales_rep_email VARCHAR(100) NOT NULL,
    office_address VARCHAR(200) NOT NULL
);

-- ORDERS TABLE
CREATE TABLE orders (
    order_id VARCHAR(10) PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    sales_rep_id VARCHAR(10) NOT NULL,
    order_date DATE NOT NULL,

    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (sales_rep_id) REFERENCES sales_reps(sales_rep_id)
);

-- ORDER ITEMS TABLE
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id VARCHAR(10) NOT NULL,
    product_id VARCHAR(10) NOT NULL,
    quantity INT NOT NULL,

    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);







-- CUSTOMERS
INSERT INTO customers VALUES
('C001','Rohan Mehta','rohan@example.com','Mumbai'),
('C002','Priya Sharma','priya@example.com','Delhi'),
('C003','Amit Verma','amit@example.com','Pune'),
('C004','Sneha Patil','sneha@example.com','Mumbai'),
('C005','Vikram Singh','vikram@example.com','Bangalore');

-- PRODUCTS
INSERT INTO products VALUES
('P001','Laptop','Electronics',65000),
('P002','Mouse','Electronics',500),
('P003','Desk Chair','Furniture',4500),
('P004','Notebook','Stationery',50),
('P007','Pen Set','Stationery',120);

-- SALES REPS
INSERT INTO sales_reps VALUES
('S001','Rahul Kapoor','rahul@company.com','Delhi Office'),
('S002','Anita Desai','anita@company.com','Mumbai HQ'),
('S003','Karan Shah','karan@company.com','Pune Office'),
('S004','Neeraj Gupta','neeraj@company.com','Bangalore Office'),
('S005','Simran Kaur','simran@company.com','Chennai Office');

-- ORDERS
INSERT INTO orders VALUES
('ORD1001','C001','S002','2024-01-10'),
('ORD1002','C002','S001','2024-01-11'),
('ORD1003','C003','S003','2024-01-12'),
('ORD1004','C004','S002','2024-01-13'),
('ORD1005','C005','S004','2024-01-14');

-- ORDER ITEMS
INSERT INTO order_items(order_id,product_id,quantity) VALUES
('ORD1001','P001',1),
('ORD1002','P004',5),
('ORD1003','P003',1),
('ORD1004','P007',3),
('ORD1005','P002',2);





