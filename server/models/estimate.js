const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const   EstimateSchema = new Schema({
    items: {
        type: Array,
        require: false
      },
    number: {
        type: String,
        require: true
      },
    customerId: {
        type: Number,
        require: true
      },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Estimate', EstimateSchema);