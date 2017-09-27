const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ciudadSchema = new Schema({
  idDepartamento: { type: Number },  
  nombreCiudad: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  codigo: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
ciudadSchema.virtual('localidads', {
  ref: 'Localidad',
  localField: '_id',
  foreignField: 'idCiudad'
});
ciudadSchema.virtual('prestadors', {
  ref: 'Prestador',
  localField: '_id',
  foreignField: 'idCiudad'
});
ciudadSchema.virtual('sucursals', {
  ref: 'Sucursal',
  localField: '_id',
  foreignField: 'idCiudad'
});
ciudadSchema.virtual('entidads', {
  ref: 'Entidad',
  localField: '_id',
  foreignField: 'idCiudad'
});
ciudadSchema.virtual('logins', {
  ref: 'Login',
  localField: '_id',
  foreignField: 'idCiudad'
});

module.exports = mongoose.model('Ciudad', ciudadSchema);
