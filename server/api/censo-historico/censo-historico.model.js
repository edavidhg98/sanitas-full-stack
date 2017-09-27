const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const censoHistoricoSchema = new Schema({
  fecha: { type: Date },  
  itemListaEstadoCamaCensoHistorico: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idCama: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
censoHistoricoSchema.virtual('cama', {
  ref: 'Cama',
  localField: 'idCama',
  foreignField: '_id',
  justOne: true
});
censoHistoricoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('CensoHistorico', censoHistoricoSchema);
