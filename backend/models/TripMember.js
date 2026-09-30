const mongoose = require('mongoose');

const TripMemberSchema = new mongoose.Schema({
  trip:   { type: mongoose.Schema.Types.ObjectId, ref: 'Trip',   required: true },
  user:   { type: mongoose.Schema.Types.ObjectId, ref: 'User',   required: true },
  role:   { type: String, enum: ['creator','member'], default: 'member' },
  status: { type: String, enum: ['pending','accepted','rejected'], default: 'pending' },
  joinedAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('TripMember', TripMemberSchema);
