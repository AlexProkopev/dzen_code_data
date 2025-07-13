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
        title: "Приход товара номер 1000000000000000000000000000000000000",
        date: "2025-07-10T14:30:00.000Z",
        description:
          "Ноутбук не включается, возможна проблема с блоком питания.Ноутбук не включается, возможна проблема с блоком питания.Ноутбук не включается, возможна проблема с блоком питания.",
      },
      {
        title: "Приход товара номер 10000000000000000000000000000000000002",
        date: "2025-07-08T10:00:00.000Z",
        description:
          "Требуется чистка системы охлаждения и замена термопасты.Требуется чистка системы охлаждения и замена термопасты.Требуется чистка системы охлаждения и замена термопасты.",
      },
      {
        title: "Приход товара номер 100000000000000000000000000000000000023",
        date: "2025-07-05T09:405:00.000Z",
        description:
          "Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.",
      },
      {
        title: "Приход товара номер 1000000000000000000000000000000000000",
        date: "2025-07-10T14:30:00.000Z",
        description:
          "Ноутбук не включается, возможна проблема с блоком питания.Ноутбук не включается, возможна проблема с блоком питания.Ноутбук не включается, возможна проблема с блоком питания.",
      },
      {
        title: "Приход товара номер 10000000000000000000000000000000000002",
        date: "2025-07-08T10:00:00.000Z",
        description:
          "Требуется чистка системы охлаждения и замена термопасты.Требуется чистка системы охлаждения и замена термопасты.Требуется чистка системы охлаждения и замена термопасты.",
      },
      {
        title: "Приход товара номер 100000000000000000000000000000000000023",
        date: "2025-07-05T09:405:00.000Z",
        description:
          "Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.",
      },
      {
        title: "Приход товара номер 1000000000000000000000000000000000000",
        date: "2025-07-10T14:30:00.000Z",
        description:
          "Ноутбук не включается, возможна проблема с блоком питания.Ноутбук не включается, возможна проблема с блоком питания.Ноутбук не включается, возможна проблема с блоком питания.",
      },
      {
        title: "Приход товара номер 10000000000000000000000000000000000002",
        date: "2025-07-08T10:00:00.000Z",
        description:
          "Требуется чистка системы охлаждения и замена термопасты.Требуется чистка системы охлаждения и замена термопасты.Требуется чистка системы охлаждения и замена термопасты.",
      },
      {
        title: "Приход товара номер 100000000000000000000000000000000000023",
        date: "2025-07-05T09:405:00.000Z",
        description:
          "Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.",
      },
      {
        title: "Приход товара номер 100000000000000000000000000000000000023",
        date: "2025-07-05T09:405:00.000Z",
        description:
          "Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.",
      },
      {
        title: "Приход товара номер 100000000000000000000000000000000000023",
        date: "2025-07-05T09:405:00.000Z",
        description:
          "Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.Треснул экран, нужна замена.",
      },
    ]);

    const [order1, order2, order3, order4, order5, order6, order7, order8, order9, order10, order11] = orders;

    await Product.insertMany([
      {
        serialNumber: 2001,
        is_new: false,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order2._id,
        date: "2025-07-10T14:30:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
        type: "Cable",
        specification: "1.5m",
        guarantee: { start: "2025-07-10", end: "2026-07-10" },
        price: [
          { value: 405, symbol: "USD", isDefault: false },
          { value: 405, symbol: "UAH", isDefault: true },
        ],
        order: order9._id,
        date: "2025-07-10T14:30:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
        type: "Cable",
        specification: "1.5m",
        guarantee: { start: "2025-07-10", end: "2026-07-10" },
        price: [
          { value: 405, symbol: "USD", isDefault: false },
          { value: 405, symbol: "UAH", isDefault: true },
        ],
        order: order4._id,
        date: "2025-07-10T14:30:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
        type: "Cable",
        specification: "1.5m",
        guarantee: { start: "2025-07-10", end: "2026-07-10" },
        price: [
          { value: 405, symbol: "USD", isDefault: false },
          { value: 405, symbol: "UAH", isDefault: true },
        ],
        order: order3._id,
        date: "2025-07-10T14:30:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
        type: "Cable",
        specification: "1.5m",
        guarantee: { start: "2025-07-10", end: "2026-07-10" },
        price: [
          { value: 405, symbol: "USD", isDefault: false },
          { value: 405, symbol: "UAH", isDefault: true },
        ],
        order: order5._id,
        date: "2025-07-10T14:30:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
        type: "Cable",
        specification: "1.5m",
        guarantee: { start: "2025-07-10", end: "2026-07-10" },
        price: [
          { value: 405, symbol: "USD", isDefault: false },
          { value: 405, symbol: "UAH", isDefault: true },
        ],
        order: order6._id,
        date: "2025-07-10T14:30:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order7._id,
        date: "2025-07-08T10:00:00.000Z",
      },
      {
        serialNumber: 2003,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order8._id,
        date: "2025-07-05T09:405:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order7._id,
        date: "2025-07-08T10:00:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order10._id,
        date: "2025-07-08T10:00:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order10._id,
        date: "2025-07-08T10:00:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order10._id,
        date: "2025-07-08T10:00:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order7._id,
        date: "2025-07-08T10:00:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order9._id,
        date: "2025-07-08T10:00:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order7._id,
        date: "2025-07-08T10:00:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order11._id,
        date: "2025-07-08T10:00:00.000Z",
      },
      {
        serialNumber: 2002,
        is_new: true,
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X5-gXdcPaB8U_g_Ddl1akL1KvjZR65lGNg&s",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
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
        order: order11._id,
        date: "2025-07-08T10:00:00.000Z",
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
