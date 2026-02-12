const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { scrapeAll } = require('./services/scraperManager');

dotenv.config();

const runScraper = async () => {
    try {
        await connectDB();
        console.log('Database connected. Starting scraper...');

        await scrapeAll();

        console.log('Scraping finished. Exiting...');
        process.exit(0);
    } catch (error) {
        console.error('Error running scraper:', error);
        process.exit(1);
    }
};

runScraper();
