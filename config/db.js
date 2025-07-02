const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Atlas Connected');
  } catch (err) {
    console.error('DB Connection Failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
