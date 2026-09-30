const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  trip:        { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
  paidBy:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title:       { type: String, required: true },
  amount:      { type: Number, required: true },
  currency:    { type: String, default: 'INR' },
  category:    { type: String },
  splitWith:   [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, share: Number, settled: { type: Boolean, default: false } }],
  receipt:     { type: String },
  date:        { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);
