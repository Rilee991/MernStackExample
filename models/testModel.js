const mongoose = require('mongoose');
//Schema
const Schema = mongoose.Schema;
const testSchema = new Schema({
    name : String
});

//Model
const testModel = mongoose.model('testModel', testSchema);

module.exports = testModel;