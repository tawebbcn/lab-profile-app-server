require("dotenv").config();
const mongoose = require("mongoose");

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dbUrl = process.env.MONGODB_URL;

async function dbConnect() {
  await mongoose.connect(dbUrl, dbOptions);
  console.log("connect to mongoose");
}

module.exports = dbConnect;