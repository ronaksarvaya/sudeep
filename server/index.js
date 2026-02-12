const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB().then(() => {
    // Routes
    app.use('/api/internships', require('./routes/internships'));
    app.use('/api/applications', require('./routes/applications'));
    app.use('/api/bookmarks', require('./routes/bookmarks'));

    // Basic Route
    app.get('/', (req, res) => {
        res.send('Internship Aggregator API is running...');
    });

    // Start Server only after DB connects
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
