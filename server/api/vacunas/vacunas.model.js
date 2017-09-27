const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vacunasSchema = new Schema({
  vacuna: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
vacunasSchema.virtual('tarifaVacunacions', {
  ref: 'TarifaVacunacion',
  localField: '_id',
  foreignField: 'idVacunas'
});

module.exports = mongoose.model('Vacunas', vacunasSchema);
