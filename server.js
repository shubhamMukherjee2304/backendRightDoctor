const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const personRoutes = require('./routes/personRoutes');
const logger = require('./middleware/logger');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger); // Optional logging middleware
app.use('/api', personRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
