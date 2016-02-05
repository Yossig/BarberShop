/**
 * Created by Yossi on 08-Jan-16.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barberSchema = new Schema({
  fullname: String,
  abilities: [String],
  status: String
});

module.exports =  mongoose.model('Barber',barberSchema)






