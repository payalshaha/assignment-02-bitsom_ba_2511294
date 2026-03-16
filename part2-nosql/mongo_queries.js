// OP1: insertMany() — insert all 3 documents

db.products.insertMany([
  {
    _id: 1,
    name: "Sony",
    category: "Electronics",
    price: 65000,
    brand: "Sony",
    specifications: {
      screen_size: "55 inch",
      resolution: "4K UHD",
      voltage: "220V"
    },
    warranty: {
      period_years: 2,
      type: "Manufacturer Warranty"
    },
    features: ["Smart TV", "WiFi", "Bluetooth"]
  },
  {
    _id: 2,
    name: "Men's Cotton T-Shirt",
    category: "Clothing",
    price: 799,
    brand: "Levi's",
    sizes_available: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    material: "100% Cotton",
    ratings: {
      average: 4.3,
      reviews_count: 120
    }
  },
  {
    _id: 3,
    name: "Organic Almonds 500g",
    category: "Groceries",
    price: 850,
    brand: "Organic India",
    expiry_date: new Date("2024-12-15"),
    nutritional_info: {
      calories: 579,
      protein: "21g",
      fat: "50g"
    },
    storage_instructions: "Store in a cool and dry place"
  }
]);

// OP2: find() — retrieve all Electronics products with price > 20000

db.products.find({
  category: "Electronics",
  price: { $gt: 20000 }
});


// OP3: find() — retrieve all Groceries expiring before 2025-01-01

db.products.find({
  category: "Groceries",
  expiry_date: { $lt: new Date("2025-01-01") }
});


// OP4: updateOne() — add a "discount_percent" field to a specific product

db.products.updateOne(
  { name: "Sony" },
  { $set: { discount_percent: 10 } }
);


// OP5: createIndex() — create an index on category field

db.products.createIndex({ category: 1 });

// This index improves query performance when filtering products by category
// (e.g., Electronics, Clothing, Groceries), which is a common query in product catalogs.
