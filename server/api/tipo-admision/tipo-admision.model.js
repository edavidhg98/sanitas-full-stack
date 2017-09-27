const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoAdmisionSchema = new Schema({
  tipAdmision: { type: String },  
  descripcion: { type: String },  
  manResponsa: { type: String },  
  manLisespe: { type: String },  
  manCargo: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
tipoAdmisionSchema.virtual('excepcionRegargos', {
  ref: 'ExcepcionRegargo',
  localField: '_id',
  foreignField: 'idTipoAdmision'
});
tipoAdmisionSchema.virtual('nivelCargos', {
  ref: 'NivelCargo',
  localField: '_id',
  foreignField: 'idTipoAdmision'
});
tipoAdmisionSchema.virtual('procedimientoConvenioCapitados', {
  ref: 'ProcedimientoConvenioCapitado',
  localField: '_id',
  foreignField: 'idTipoAdmision'
});
tipoAdmisionSchema.virtual('trazabilidadAdmisions', {
  ref: 'TrazabilidadAdmision',
  localField: '_id',
  foreignField: 'idTipoAdmision'
});
tipoAdmisionSchema.virtual('subconceptos', {
  ref: 'Subconcepto',
  localField: '_id',
  foreignField: 'idTipoAdmision'
});

module.exports = mongoose.model('TipoAdmision', tipoAdmisionSchema);
