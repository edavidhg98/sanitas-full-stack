const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const encabezadoResultadoSchema = new Schema({
  idAdmision: { type: Number },  
  idCentroCostoSolicita: { type: Number },  
  idMedicoOrdena: { type: Number },  
  idCentroCosto: { type: Number },  
  consecutivoSolicitud: { type: Number },  
  secuencia: { type: Number },  
  procedencia: { type: String },  
  numMuestras: { type: Number },  
  idMedicoPractica: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  itemListaEstado: { type: Number },  
  fechaCargo: { type: Date },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId },
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
encabezadoResultadoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
encabezadoResultadoSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('EncabezadoResultado', encabezadoResultadoSchema);
