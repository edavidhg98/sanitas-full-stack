const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parAliascolumnasSchema = new Schema({
  nombretabla: { type: String },  
  nombrecolumna: { type: String },  
  aliascolumna: { type: String },  
  loginRegistro: { type: String },  
  fechaRegistro: { type: Date },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('ParAliascolumnas', parAliascolumnasSchema);
