const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user:          { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  bio:           { type: String, default: '' },
  travelStyle:   [{ type: String }],
  languages:     [{ type: String }],
  interests:     [{ type: String }],
  budget:        { type: String, enum: ['budget','mid','luxury'], default: 'mid' },
  location:      { country: String, city: String },
  socialLinks:   { instagram: String, twitter: String },
  tripsCompleted:{ type: Number, default: 0 },
  rating:        { type: Number, default: 0 },
  reviewCount:   { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
