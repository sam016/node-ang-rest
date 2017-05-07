const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqid = require('uniqid');

// create a schema
var testSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String,
    required: 'Food\'s name is requird'
  },
  type: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  updated_on: {
    type: Date,
    default: Date.now
  },
  created_on: {
    type: Date,
    default: Date.now
  }
});

testSchema.pre('save', function (done) {
  if (this.isNew) {
    this.id = uniqid();
  }

  done();
});

// the schema is useless so far
// we need to create a model using it
var Test = mongoose.model('Test', testSchema);

Test.PROJECTION_ALIASES = {
  "ID": "$id",
  "Name": "$name",
  "Type": "$type",
  "Price": "$price",
  "Description": "$description",
  "Date": "$created_on",
  "_id": 0
};

module.exports = Test;
