const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subconceptoSchema = new Schema({
  idConcepto: { type: Number },  
  idSubConcepto: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  idPrestador: { type: Number },  

  /** Foreign Fields */
  
  idMotivo: { type: Schema.Types.ObjectId },
  idTipoAdmision: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
subconceptoSchema.virtual('motivo', {
  ref: 'Motivo',
  localField: 'idMotivo',
  foreignField: '_id',
  justOne: true
});
subconceptoSchema.virtual('tipoAdmision', {
  ref: 'TipoAdmision',
  localField: 'idTipoAdmision',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('Subconcepto', subconceptoSchema);
