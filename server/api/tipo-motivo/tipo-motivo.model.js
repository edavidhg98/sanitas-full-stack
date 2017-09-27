const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoMotivoSchema = new Schema({
  itemListaClaseMotivo: { type: Number },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  codigo: { type: Number },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
tipoMotivoSchema.virtual('motivos', {
  ref: 'Motivo',
  localField: '_id',
  foreignField: 'idTipoMotivo'
});

module.exports = mongoose.model('TipoMotivo', tipoMotivoSchema);
