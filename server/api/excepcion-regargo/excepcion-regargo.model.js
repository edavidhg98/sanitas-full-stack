const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const excepcionRegargoSchema = new Schema({
  porcentaje: { type: Number },  
  valor: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  itemListaEstado: { type: Boolean },  
  idPrestador: { type: Number },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId },
  idTipoAdmision: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId },
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
excepcionRegargoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
excepcionRegargoSchema.virtual('tipoAdmision', {
  ref: 'TipoAdmision',
  localField: 'idTipoAdmision',
  foreignField: '_id',
  justOne: true
});
excepcionRegargoSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
excepcionRegargoSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ExcepcionRegargo', excepcionRegargoSchema);
