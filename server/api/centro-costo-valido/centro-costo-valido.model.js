const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const centroCostoValidoSchema = new Schema({
  idCentroCostoGenera: { type: Number },  
  idCentroCostoValido: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  farmacia: { type: String },  
  estadoItemLista: { type: Number },  

  /** Foreign Fields */
  
  idCentroCostoValido1: { type: Schema.Types.ObjectId },
  idCentroCostoValido2: { type: Schema.Types.ObjectId },
  idPrestador: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
centroCostoValidoSchema.virtual('centroCostoValido1', {
  ref: 'CentroCostoValido',
  localField: 'idCentroCostoValido',
  foreignField: '_id',
  justOne: true
});
centroCostoValidoSchema.virtual('centroCostoValido2', {
  ref: 'CentroCostoValido',
  localField: 'idCentroCostoValido',
  foreignField: '_id',
  justOne: true
});
centroCostoValidoSchema.virtual('prestador', {
  ref: 'Prestador',
  localField: 'idPrestador',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('CentroCostoValido', centroCostoValidoSchema);
