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
    title: "Dell XPS 405",
    date: "2025-07-10T14:30:00.000Z",
    description: "Ноутбук не включается, возможна проблема с блоком питания.",
    clientName: "Иван Иванов",
    clientPhone: "+380501234567",
    status: "in_progress",
  },
  {
    title: "HP Pavilion",
    date: "2025-07-08T10:00:00.000Z",
    description: "Требуется чистка системы охлаждения и замена термопасты.",
    clientName: "Ольга Смирнова",
    clientPhone: "+380631234567",
    status: "new",
  },
  {
    title: "MacBook Pro",
    date: "2025-07-05T09:405:00.000Z",
    description: "Треснул экран, нужна замена.",
    clientName: "Алексей Кузнецов",
    clientPhone: "+380971234567",
    status: "completed",
  },
]);

const [order1, order2, order3] = orders;

await Product.insertMany([
  {
    serialNumber: 2001,
    is_new: false,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
    title: "Dell XPS 405",
    type: "Power Supply",
    specification: "65W оригинальный адаптер",
    guarantee: {
      start: "2025-07-10",
      end: "2026-07-10",
    },
    price: [
      { value: 1350, symbol: "USD", isDefault: false },
      { value: 1350, symbol: "UAH", isDefault: true },
    ],
    order: order1._id,
    date: "2025-07-10T14:30:00.000Z",
  },
   {
    serialNumber: 2002,
    is_new: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
    title: "Кабель питания",
    type: "Cable",
    specification: "1.5m",
    guarantee: { start: "2025-07-10", end: "2026-07-10" },
    price: [
      { value: 405, symbol: "USD", isDefault: false },
      { value: 405, symbol: "UAH", isDefault: true },
    ],
    order: order1._id,
    date: "2025-07-10T14:30:00.000Z",
  },
   {
    serialNumber: 2002,
    is_new: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
    title: "Кабель питания",
    type: "Cable",
    specification: "1.5m",
    guarantee: { start: "2025-07-10", end: "2026-07-10" },
    price: [
      { value: 405, symbol: "USD", isDefault: false },
      { value: 405, symbol: "UAH", isDefault: true },
    ],
    order: order1._id,
    date: "2025-07-10T14:30:00.000Z",
  },
   {
    serialNumber: 2002,
    is_new: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
    title: "Кабель питания",
    type: "Cable",
    specification: "1.5m",
    guarantee: { start: "2025-07-10", end: "2026-07-10" },
    price: [
      { value: 405, symbol: "USD", isDefault: false },
      { value: 405, symbol: "UAH", isDefault: true },
    ],
    order: order1._id,
    date: "2025-07-10T14:30:00.000Z",
  },
   {
    serialNumber: 2002,
    is_new: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
    title: "Кабель питания",
    type: "Cable",
    specification: "1.5m",
    guarantee: { start: "2025-07-10", end: "2026-07-10" },
    price: [
      { value: 405, symbol: "USD", isDefault: false },
      { value: 405, symbol: "UAH", isDefault: true },
    ],
    order: order1._id,
    date: "2025-07-10T14:30:00.000Z",
  },
   {
    serialNumber: 2002,
    is_new: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
    title: "Кабель питания",
    type: "Cable",
    specification: "1.5m",
    guarantee: { start: "2025-07-10", end: "2026-07-10" },
    price: [
      { value: 405, symbol: "USD", isDefault: false },
      { value: 405, symbol: "UAH", isDefault: true },
    ],
    order: order1._id,
    date: "2025-07-10T14:30:00.000Z",
  },
   {
    serialNumber: 2002,
    is_new: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
    title: "Кабель питания",
    type: "Cable",
    specification: "1.5m",
    guarantee: { start: "2025-07-10", end: "2026-07-10" },
    price: [
      { value: 405, symbol: "USD", isDefault: false },
      { value: 405, symbol: "UAH", isDefault: true },
    ],
    order: order1._id,
    date: "2025-07-10T14:30:00.000Z",
  },
   {
    serialNumber: 2002,
    is_new: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
    title: "Кабель питания",
    type: "Cable",
    specification: "1.5m",
    guarantee: { start: "2025-07-10", end: "2026-07-10" },
    price: [
      { value: 405, symbol: "USD", isDefault: false },
      { value: 405, symbol: "UAH", isDefault: true },
    ],
    order: order1._id,
    date: "2025-07-10T14:30:00.000Z",
  },
  {
    serialNumber: 2002,
    is_new: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
    title: "Термопаста Arctic MX-4",
    type: "Consumable",
    specification: "4 грамма",
    guarantee: {
      start: "2025-07-08",
      end: "2027-07-08",
    },
    price: [
      { value: 270, symbol: "USD", isDefault: false },
      { value: 270, symbol: "UAH", isDefault: true },
    ],
    order: order2._id,
    date: "2025-07-08T10:00:00.000Z",
  },
  {
    serialNumber: 2003,
    is_new: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
    title: "Экран Retina для MacBook Pro 13\"",
    type: "Display",
    specification: "Retina, 2560x1600",
    guarantee: {
      start: "2025-07-05",
      end: "2026-07-05",
    },
    price: [
      { value: 8100, symbol: "USD", isDefault: false },
      { value: 8100, symbol: "UAH", isDefault: true },
    ],
    order: order3._id,
    date: "2025-07-05T09:405:00.000Z",
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
