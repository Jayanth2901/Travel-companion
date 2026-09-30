const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  room:    { type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom', required: true },
  sender:  { type: mongoose.Schema.Types.ObjectId, ref: 'User',     required: true },
  text:    { type: String },
  type:    { type: String, enum: ['text','image','file','ai'], default: 'text' },
  readBy:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);
