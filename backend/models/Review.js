const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  reviewer:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reviewee:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  trip:      { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
  rating:    { type: Number, required: true, min: 1, max: 5 },
  comment:   { type: String },
  sentiment: { type: String, enum: ['positive','neutral','negative'] },
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);
