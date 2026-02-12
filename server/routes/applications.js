const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// @route   GET /api/applications/:userId
// @desc    Get user applications
// @access  Public (should be protected)
router.get('/:userId', async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.params.userId })
            .populate('internshipId')
            .sort({ appliedAt: -1 });
        res.json(applications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/applications
// @desc    Apply for an internship
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { userId, internshipId } = req.body;

        // Check if already applied
        const existingApp = await Application.findOne({ userId, internshipId });
        if (existingApp) {
            return res.status(400).json({ message: 'Already applied' });
        }

        const newApplication = new Application({ userId, internshipId });
        const savedApplication = await newApplication.save();
        res.status(201).json(savedApplication);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route   PATCH /api/applications/:id
// @desc    Update application status
// @access  Public
router.patch('/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const application = await Application.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        res.json(application);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
