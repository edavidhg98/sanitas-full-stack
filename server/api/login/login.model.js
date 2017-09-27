const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
  login: { type: String },  
  numeroDocumento: { type: String },  
  consultaHistoria: { type: String },  
  idCentroCosto: { type: Number },  
  loginRegistro: { type: String },  
  fechaRegistro: { type: Date },  
  fechaUltimoCambio: { type: Date },  
  fechaUltimoAcceso: { type: Date },  
  password: { type: String },  
  claveAgfa: { type: String },  
  itemListaCargo: { type: Number },  
  nombre: { type: String },  
  usuarioAgfa: { type: String },  
  itemListaEstadoLogin: { type: Number },  
  itemListaTipoUsuarioLogin: { type: Number },  
  usuarioLdap: { type: String },  
  itemListaTipoDocumento: { type: Number },  
  callCenter: { type: String },  
  apellido: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idCiudad: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
loginSchema.virtual('ciudad', {
  ref: 'Ciudad',
  localField: 'idCiudad',
  foreignField: '_id',
  justOne: true
});
loginSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
loginSchema.virtual('loginSucursals', {
  ref: 'LoginSucursal',
  localField: '_id',
  foreignField: 'idLogin'
});

module.exports = mongoose.model('Login', loginSchema);
