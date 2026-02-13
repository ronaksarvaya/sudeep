const PMInternshipScraper = require('../scrapers/pminternship');
const IntershalaScraper = require('../scrapers/Internshala_scraper');
const cron = require('node-cron');
const Internship = require('../models/Internship');
// const LinkedInScraper = require('../scrapers/linkedin');
// const IndeedScraper = require('../scrapers/indeed');
// const WorkIndiaScraper = require('../scrapers/workindia');

const saveListings = async (listings) => {
    let count = 0;
    for (const listing of listings) {
        try {
            // Use applyUrl as a unique identifier to avoid duplicates
            await Internship.findOneAndUpdate(
                { applyUrl: listing.applyUrl },
                listing,
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
            count++;
        } catch (error) {
            console.error(`Error saving listing ${listing.title}:`, error.message);
        }
    }
    console.log(`Saved/Updated ${count} listings to database.`);
};

const scrapeAll = async () => {
    console.log('Starting scraping job...');

    // array of scrapers to run
    const scrapers = [
        new PMInternshipScraper(),
        new IntershalaScraper(),
        // new LinkedInScraper(),
        // new IndeedScraper(),
        // new WorkIndiaScraper(),
    ];

    for (const scraper of scrapers) {
        try {
            console.log(`Scraping ${scraper.platformName}...`);
            await scraper.initialize();
            const listings = await scraper.scrape();
            await scraper.close();
            console.log(`Scraped ${listings.length} listings from ${scraper.platformName}`);

            await saveListings(listings);

        } catch (error) {
            console.error(`Error scraping ${scraper.platformName}:`, error);
            if (scraper.browser) await scraper.close();
        }
    }

    console.log('Scraping job completed.');
};

// Schedule scraping to run every day at midnight
const initScheduler = () => {
    console.log('Initializing Scraper Scheduler (0 0 * * *)...');
    cron.schedule('0 0 * * *', () => {
        console.log('Running scheduled scraping job...');
        scrapeAll();
    });
};

module.exports = { scrapeAll, initScheduler };
