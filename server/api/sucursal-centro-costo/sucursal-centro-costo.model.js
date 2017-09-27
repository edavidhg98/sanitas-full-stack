const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sucursalCentroCostoSchema = new Schema({
  idSucursal: { type: Number },  
  idCentroCosto: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('SucursalCentroCosto', sucursalCentroCostoSchema);
