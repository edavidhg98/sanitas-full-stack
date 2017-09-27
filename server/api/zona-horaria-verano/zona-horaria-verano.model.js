const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const zonaHorariaVeranoSchema = new Schema({
  fechaInicio: { type: Date },  
  fechaFin: { type: Date },  
  utc: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
zonaHorariaVeranoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ZonaHorariaVerano', zonaHorariaVeranoSchema);
