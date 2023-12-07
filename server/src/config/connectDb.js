const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://127.0.0.1:27017/usersNetwork"
    );
    console.log("MongoDB Connected: successfully" + conn);
  } catch (error) {
    console.error("lỗi: " + error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
