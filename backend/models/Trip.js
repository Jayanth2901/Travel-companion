const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  title:        { type: String, required: true },
  description:  { type: String },
  creator:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  destination:  { country: String, city: String, coordinates: { lat: Number, lng: Number } },
  startDate:    { type: Date, required: true },
  endDate:      { type: Date, required: true },
  maxMembers:   { type: Number, default: 5 },
  members:      [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  category:     { type: String },
  budget:       { type: String, enum: ['budget','mid','luxury'] },
  status:       { type: String, enum: ['open','full','completed','cancelled'], default: 'open' },
  coverImage:   { type: String, default: '' },
  isPublic:     { type: Boolean, default: true },
  tags:         [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Trip', TripSchema);
