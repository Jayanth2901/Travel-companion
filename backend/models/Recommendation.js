const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
  user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type:        { type: String, enum: ['place','trip','companion','activity'], required: true },
  data:        { type: mongoose.Schema.Types.Mixed },
  score:       { type: Number },
  expiresAt:   { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Recommendation', RecommendationSchema);
