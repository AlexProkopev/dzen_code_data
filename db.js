require('dotenv').config();

const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI
console.log('DB_URI:', DB_URI); 
mongoose
  .connect(DB_URI)
  .then(() => console.log("MongoDB connected to mongoose..."))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });