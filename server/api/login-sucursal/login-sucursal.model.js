const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSucursalSchema = new Schema({
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idSucursal: { type: Schema.Types.ObjectId },
  idLogin: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
loginSucursalSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
loginSucursalSchema.virtual('login', {
  ref: 'Login',
  localField: 'idLogin',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('LoginSucursal', loginSucursalSchema);
