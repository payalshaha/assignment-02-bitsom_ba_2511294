// OP1: insertMany() — insert all 3 documents

db.sample_documents.insertMany([
  {
    _id: 4,
    name: "iPhone 11",
    category: "Electronics",
    price: 80000,
    brand: "Apple",
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
    _id: 5,
    name: "WoMen's Cotton T-Shirt",
    category: "Clothing",
    price: 1500,
    brand: "Gap",
    sizes_available: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    material: "100% Cotton",
    ratings: {
      average: 4.3,
      reviews_count: 120
    }
  },
  {
    _id: 6,
    name: "Cashews 500g",
    category: "Groceries",
    price: 2000,
    brand: "Organic India",
    expiry_date: new Date("2026-12-15"),
    nutritional_info: {
      calories: 579,
      protein: "21g",
      fat: "50g"
    },
    storage_instructions: "Store in a cool and dry place"
  }
]);

// OP2: find() — retrieve all Electronics products with price > 20000

db.sample_documents.find({
  category: "Electronics",
  price: { $gt: 20000 }
});


// OP3: find() — retrieve all Groceries expiring before 2025-01-01

db.sample_documents.find({
  category: "Groceries",
  expiry_date: { $lt: new Date("2025-01-01") }
});


// OP4: updateOne() — add a "discount_percent" field to a specific product

db.sample_documents.updateOne(
  { name: "Samsung 55 Inch Smart TV" },
  { $set: { discount_percent: 10 } }
);


// OP5: createIndex() — create an index on category field

db.sample_documents.createIndex({ category: 1 });

// This index improves query performance when filtering products by category
// (e.g., Electronics, Clothing, Groceries), which is a common query in product catalogs.