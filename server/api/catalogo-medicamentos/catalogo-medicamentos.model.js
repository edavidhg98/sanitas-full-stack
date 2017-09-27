const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catalogoMedicamentosSchema = new Schema({
  descripcion: { type: String },  
  observacion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  fechaModificacion: { type: Date },  
  loginModificacion: { type: String },  
  itemListaEstadoCatMedicamentos: { type: Number },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('CatalogoMedicamentos', catalogoMedicamentosSchema);
