const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Internship = require('./models/Internship');
const connectDB = require('./config/db');

dotenv.config();

const mockInternships = [
    {
        title: 'Software Engineering Intern',
        company: 'Tech Corp',
        description: 'Work on cutting-edge web applications using React and Node.js.',
        duration: '6 months',
        stipend: '₹25,000/month',
        location: 'Bangalore',
        applyUrl: 'https://example.com/apply/1',
        source: 'LinkedIn',
        postedAt: new Date(),
    },
    {
        title: 'Data Science Intern',
        company: 'Data Solutions',
        description: 'Analyze large datasets and build predictive models using Python.',
        duration: '3 months',
        stipend: '₹30,000/month',
        location: 'Remote',
        applyUrl: 'https://example.com/apply/2',
        source: 'Indeed',
        postedAt: new Date(),
    },
    {
        title: 'Product Management Intern',
        company: 'Startup Hub',
        description: 'Assist in product roadmap planning and market research.',
        duration: '6 months',
        stipend: '₹20,000/month',
        location: 'Mumbai',
        applyUrl: 'https://example.com/apply/3',
        source: 'WorkIndia',
        postedAt: new Date(),
    },
    {
        title: 'Government Tech Intern',
        company: 'Ministry of Tech',
        description: 'Support digital india initiatives.',
        duration: '12 months',
        stipend: '₹15,000/month',
        location: 'Delhi',
        applyUrl: 'https://pminternshipscheme.com/apply',
        source: 'PMInternshipScheme',
        postedAt: new Date(),
    },
];

const seedData = async () => {
    try {
        await connectDB();

        await Internship.deleteMany(); // Clear existing data
        console.log('Cleared existing internships...');

        await Internship.insertMany(mockInternships);
        console.log('Mock data imported successfully!');

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
