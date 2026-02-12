const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    internshipId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Internship',
        required: true,
    },
    status: {
        type: String,
        enum: ['Applied', 'Interview Scheduled', 'Rejected', 'Accepted'],
        default: 'Applied',
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Application', ApplicationSchema);
