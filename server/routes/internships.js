const express = require('express');
const router = express.Router();
const Internship = require('../models/Internship');

// @route   GET /api/internships
// @desc    Get all internships with filtering
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { title, location, duration, stipend, source } = req.query;
        let query = {};

        if (title) query.title = { $regex: title, $options: 'i' };
        if (location) query.location = { $regex: location, $options: 'i' };
        if (duration) query.duration = { $regex: duration, $options: 'i' };
        if (stipend) query.stipend = { $regex: stipend, $options: 'i' };
        if (source) query.source = source;

        const internships = await Internship.find(query).sort({ postedAt: -1 });
        res.json(internships);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   GET /api/internships/:id
// @desc    Get single internship
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const internship = await Internship.findById(req.params.id);
        if (!internship) return res.status(404).json({ message: 'Internship not found' });
        res.json(internship);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/internships
// @desc    Create an internship (for scraper/admin)
// @access  Public (should be protected in prod)
router.post('/', async (req, res) => {
    try {
        const newInternship = new Internship(req.body);
        const savedInternship = await newInternship.save();
        res.status(201).json(savedInternship);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
