const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grupoProcedimientoSchema = new Schema({
  itemListaTipoProcedimiento: { type: Number },  
  gruProced: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  idPrestador: { type: Number },  
  itemListaEstadoEntidadUvr: { type: Number },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
grupoProcedimientoSchema.virtual('subGrupoProcedimientos', {
  ref: 'SubGrupoProcedimiento',
  localField: '_id',
  foreignField: 'idGrupoProcedimiento'
});

module.exports = mongoose.model('GrupoProcedimiento', grupoProcedimientoSchema);
