const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catalogoMedicamentosDetalleSchema = new Schema({
  idEncabezado: { type: Number },  
  fechaInicial: { type: Date },  
  valorCompra: { type: Number },  
  valorMn: { type: Number },  
  idItemListaEstado: { type: Number },  
  porcentajeRegulado: { type: Number },  
  loginRegistro: { type: String },  
  loginModificacion: { type: String },  
  idItemListaRegulado: { type: Number },  
  fechaModificacion: { type: Date },  
  idProducto: { type: Number },  
  porcentajeMaterial: { type: Number },  
  observaciones: { type: String },  
  valorVentaPublico: { type: Number },  
  fechaFinal: { type: Date },  
  fechaRegistro: { type: Date },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('CatalogoMedicamentosDetalle', catalogoMedicamentosDetalleSchema);
