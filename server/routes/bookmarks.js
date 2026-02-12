const express = require('express');
const router = express.Router();
const Bookmark = require('../models/Bookmark');

// @route   GET /api/bookmarks/:userId
// @desc    Get user bookmarks
// @access  Public
router.get('/:userId', async (req, res) => {
    try {
        const bookmarks = await Bookmark.find({ userId: req.params.userId })
            .populate('internshipId')
            .sort({ savedAt: -1 });
        res.json(bookmarks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/bookmarks
// @desc    Bookmark an internship
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { userId, internshipId } = req.body;

        // Check if already bookmarked
        const existingBookmark = await Bookmark.findOne({ userId, internshipId });
        if (existingBookmark) {
            return res.status(400).json({ message: 'Already bookmarked' });
        }

        const newBookmark = new Bookmark({ userId, internshipId });
        const savedBookmark = await newBookmark.save();
        res.status(201).json(savedBookmark);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route   DELETE /api/bookmarks/:id
// @desc    Remove bookmark
// @access  Public
router.delete('/:id', async (req, res) => {
    try {
        await Bookmark.findByIdAndDelete(req.params.id);
        res.json({ message: 'Bookmark removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
