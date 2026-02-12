const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: String,
    stipend: String,
    location: String,
    applyUrl: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        enum: ['LinkedIn', 'Indeed', 'WorkIndia', 'PMInternshipScheme', 'Other'],
        required: true,
    },
    embeddingVector: [Number], // For AI similarity
    postedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Internship', InternshipSchema);
