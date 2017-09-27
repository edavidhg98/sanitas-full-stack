const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoTarifaVacunacionSchema = new Schema({
  tarifa: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
tipoTarifaVacunacionSchema.virtual('tarifaVacunacions', {
  ref: 'TarifaVacunacion',
  localField: '_id',
  foreignField: 'idTipoTarifaVacunacion'
});

module.exports = mongoose.model('TipoTarifaVacunacion', tipoTarifaVacunacionSchema);
