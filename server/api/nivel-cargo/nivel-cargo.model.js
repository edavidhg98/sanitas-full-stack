const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nivelCargoSchema = new Schema({
  itemListaNivel1: { type: Number },  
  itemListaNivel2: { type: Number },  
  itemListaNivel3: { type: Number },  
  itemListaNivel4: { type: Number },  
  itemListaNivel5: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idSucursalEntidad: { type: Schema.Types.ObjectId },
  idTipoAdmision: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
nivelCargoSchema.virtual('sucursalEntidad', {
  ref: 'SucursalEntidad',
  localField: 'idSucursalEntidad',
  foreignField: '_id',
  justOne: true
});
nivelCargoSchema.virtual('tipoAdmision', {
  ref: 'TipoAdmision',
  localField: 'idTipoAdmision',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('NivelCargo', nivelCargoSchema);
