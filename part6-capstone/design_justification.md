## Storage Systems

In Part 1,  structured data from orders_flat.csv was normalized into multiple related tables to remove redundancy and ensure consistency.

In Part 2, sample_documents.json demonstrated how NoSQL databases handle flexible and nested data. This approach is applied to store electronics, groceries information where attributes such as mobile version, features vary. A document bases NoSQL database allows storing heterogenous data efficiently.

In Part 3, retail_transaction.csv was transformed into star schema for analytical queries.This concept is extended by using OLAP layer for calculating monthly sales, total revenue tec..

In part 4, we used Vector database where using semantic search, we calculates top 2 similar sentences from set with similarity score.

In Part 5, customers.csv, orders.json, and products.parquet were queried directly using DuckDB without preloading.This supports the use of a data lake to store historical data in multiple formats.DuckDB is used on top of this data lake for fast analytical queries and machine learning preparation, such as predicting readmission risk.

## OLTP vs OLAP Boundary

The transactional system (OLTP) includes the relational database and the NoSQL database. It handles real-time operations such as storing records, admissions, and updates. This is based on Part 1 (structured relational design from orders_flat.csv) and Part 2 (flexible document storage from sample_documents.json). These systems are optimized for frequent inserts, updates, and fast query response.

The analytical system (OLAP) begins when data is moved from these transactional systems into the data lake. Similar to Part 5, data is stored in formats like CSV, JSON, and Parquet, and then queried using DuckDB. This layer is used for reporting, aggregations, and analysis, as practiced in Parts 3 and 5.

The boundary is defined at the point where data leaves the transactional databases and enters the data lake for analysis. This separation ensures that analytical queries do not affect the performance of real-time operations.

## Trade-offs

A key trade-off is the increased complexity of using multiple systems, as seen across Parts 1–5. Integrating relational databases, NoSQL systems, and a data lake requires careful data management and can lead to consistency issues.

To mitigate this, structured data pipelines are used. Batch processing (as in Part 3 and Part 5) ensures data consistency, while streaming pipelines support real-time updates. Data validation and schema control mechanisms help maintain quality across systems.

Another trade-off is using DuckDB instead of a full-scale data warehouse. While it performed efficiently in Part 5 for moderate datasets, it may not scale for very large data volumes. This can be addressed by designing the system to allow future migration to distributed analytical systems if required.
