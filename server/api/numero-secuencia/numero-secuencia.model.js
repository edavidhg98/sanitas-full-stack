const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const numeroSecuenciaSchema = new Schema({
  type: { type: String },  
  prefix: { type: String },  
  lastnumber: { type: Number },  
  length: { type: Number },  
  year: { type: Boolean },  
  month: { type: Boolean },  
  lastyear: { type: Number },  
  lastmonth: { type: Number },  
  tablename: { type: String },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
numeroSecuenciaSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('NumeroSecuencia', numeroSecuenciaSchema);
