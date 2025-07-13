
const DB_URI = process.env.DB_URI
const mongoose = require("mongoose");
mongoose
  .connect(DB_URI)
  .then(() => console.log("✅MongoDB подключен"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });