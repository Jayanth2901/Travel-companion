const mongoose = require('mongoose');

const ChatRoomSchema = new mongoose.Schema({
  name:     { type: String },
  type:     { type: String, enum: ['direct','group','trip'], default: 'direct' },
  trip:     { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
  members:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  lastMsg:  { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
}, { timestamps: true });

module.exports = mongoose.model('ChatRoom', ChatRoomSchema);
