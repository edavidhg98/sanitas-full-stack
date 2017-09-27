const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const procedimientoConvenioCapitadoSchema = new Schema({
  fechaInicial: { type: Date },  
  fechaFinal: { type: Date },  
  itemListaTipoCargo: { type: Number },  
  descripcion: { type: String },  
  valor: { type: Number },  
  alias: { type: String },  
  excedente: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idSucursalEntidad: { type: Schema.Types.ObjectId },
  idTipoAdmision: { type: Schema.Types.ObjectId },
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
procedimientoConvenioCapitadoSchema.virtual('sucursalEntidad', {
  ref: 'SucursalEntidad',
  localField: 'idSucursalEntidad',
  foreignField: '_id',
  justOne: true
});
procedimientoConvenioCapitadoSchema.virtual('tipoAdmision', {
  ref: 'TipoAdmision',
  localField: 'idTipoAdmision',
  foreignField: '_id',
  justOne: true
});
procedimientoConvenioCapitadoSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ProcedimientoConvenioCapitado', procedimientoConvenioCapitadoSchema);
