require("dotenv").config();
const mongoose = require("mongoose");
const Order = require("./models/Order");
const Product = require("./models/Product");

async function seed() {
  try {
    await mongoose.connect(process.env.DB_URI_MONGOOSE);
    console.log("✅ Connected to MongoDB");

    const orders = await Order.insertMany([
      {
        title: "Order D",
        date: "2023-01-02 14:30:00",
        description: "Second test order",
      },
    ]);

    const [order1] = orders;

    await Product.insertMany([
      {
        serialNumber: 1001,
        is_new: true,
        photo: "photo1.jpg",
        title: "Product 3",
        type: "Monitor1",
        specification: "Full HD, 60Hz",
        guarantee: {
          start: "2023-01-01",
          end: "2024-01-02",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: false },
          { value: 3800, symbol: "UAH", isDefault: true },
        ],
        order: order1._id,
        date: "2023-01-01 10:00:00",
      },
    ]);

    console.log("✅ Seeding complete");
  } catch (err) {
    console.error("❌ Seed failed:", err);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}

seed();
