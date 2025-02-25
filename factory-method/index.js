const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Database = require("./src/config/dbs"); // Vì file của bạn tên là `dbs.js`
const userRoutes = require('./src/router/user');

dotenv.config();
const app = express();

// Kết nối MongoDB thông qua Singleton
Database.connect();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Route kiểm tra server
app.get('/', (req, res) => {
    res.send('User Factory API with Singleton is running');
});

// Khởi động server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));