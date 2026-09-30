const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  email:       { type: String, required: true, unique: true, lowercase: true },
  password:    { type: String, minlength: 8 },
  avatar:      { type: String, default: '' },
  provider:    { type: String, enum: ['local','google'], default: 'local' },
  isVerified:  { type: Boolean, default: false },
  isActive:    { type: Boolean, default: true },
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
UserSchema.methods.comparePassword = function(plain) { return bcrypt.compare(plain, this.password); };

module.exports = mongoose.model('User', UserSchema);
