const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Internship = require('./models/Internship');
const connectDB = require('./config/db');

dotenv.config();

const checkData = async () => {
    try {
        await connectDB();
        const count = await Internship.countDocuments();
        console.log(`Total Internships in DB: ${count}`);

        if (count > 0) {
            const sample = await Internship.findOne();
            console.log('Sample Data:', sample);
        }

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

checkData();
