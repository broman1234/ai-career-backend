const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  title: String,
  description: String,
  requirements: [String],
  averageSalary: {
    min: Number,
    max: Number,
    currency: String
  },
  skills: [{
    name: String,
    category: String,
    importance: Number
  }],
  jobMarketData: {
    demandLevel: String,
    growthRate: Number,
    totalJobs: Number
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Career', careerSchema); 