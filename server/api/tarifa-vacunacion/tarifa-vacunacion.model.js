const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tarifaVacunacionSchema = new Schema({
  valor: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idSucursalEntidad: { type: Schema.Types.ObjectId },
  idTipoTarifaVacunacion: { type: Schema.Types.ObjectId },
  idVacunas: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
tarifaVacunacionSchema.virtual('sucursalEntidad', {
  ref: 'SucursalEntidad',
  localField: 'idSucursalEntidad',
  foreignField: '_id',
  justOne: true
});
tarifaVacunacionSchema.virtual('tipoTarifaVacunacion', {
  ref: 'TipoTarifaVacunacion',
  localField: 'idTipoTarifaVacunacion',
  foreignField: '_id',
  justOne: true
});
tarifaVacunacionSchema.virtual('vacunas', {
  ref: 'Vacunas',
  localField: 'idVacunas',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('TarifaVacunacion', tarifaVacunacionSchema);
