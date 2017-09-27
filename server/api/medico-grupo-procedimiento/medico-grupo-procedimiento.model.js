const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicoGrupoProcedimientoSchema = new Schema({
  idMedico: { type: Number },  
  idEspecialidad: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idSubGrupoProcedimiento: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
medicoGrupoProcedimientoSchema.virtual('subGrupoProcedimiento', {
  ref: 'SubGrupoProcedimiento',
  localField: 'idSubGrupoProcedimiento',
  foreignField: '_id',
  justOne: true
});
medicoGrupoProcedimientoSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('MedicoGrupoProcedimiento', medicoGrupoProcedimientoSchema);
