const mongoose = require('mongoose');

const TravelTwinSchema = new mongoose.Schema({
  user:            { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
  embedding:       [{ type: Number }],
  preferences:     { type: mongoose.Schema.Types.Mixed },
  travelHistory:   [{ destination: String, date: Date, rating: Number }],
  lastUpdated:     { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('TravelTwin', TravelTwinSchema);
