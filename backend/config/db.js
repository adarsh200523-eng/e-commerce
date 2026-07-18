const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('\n✅ ========================================');
    console.log(`✅ MongoDB Connected Successfully!`);
    console.log(`✅ Host: ${conn.connection.host}`);
    console.log('✅ ========================================\n');
  } catch (error) {
    console.error('\n❌ ========================================');
    console.error(`❌ MongoDB Connection Failed!`);
    console.error(`❌ Error: ${error.message}`);
    console.error('❌ ========================================\n');
    process.exit(1);
  }
};

module.exports = connectDB;
