const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cargosPendientesSchema = new Schema({
  idAdmision: { type: Number },  
  fechaRegistro: { type: Date },  
  manual: { type: Boolean },  
  conSolicitu: { type: Number },  
  itemListaTipoPedido: { type: Number },  
  idMedicoTiene: { type: Number },  
  observaciones: { type: String },  
  consecutivoManual: { type: Number },  
  horaPedido: { type: Number },  
  fechaDespacho: { type: Date },  
  horaDespacho: { type: Number },  
  idCentroCosto: { type: Number },  
  itemListaEstado: { type: Number },  
  minutoDespacho: { type: Number },  
  idMedico: { type: Number },  
  loginDespacho: { type: String },  
  loginPedido: { type: String },  
  minutoPedido: { type: Number },  
  idCentroCostoDestino: { type: Number },  
  fechaPedido: { type: Date },  

  /** Foreign Fields */
  
  idPrioridad: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
cargosPendientesSchema.virtual('prioridad', {
  ref: 'Prioridad',
  localField: 'idPrioridad',
  foreignField: '_id',
  justOne: true
});
cargosPendientesSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});
cargosPendientesSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
cargosPendientesSchema.virtual('detalleCargosPendientess', {
  ref: 'DetalleCargosPendientes',
  localField: '_id',
  foreignField: 'idCargosPendientes'
});

module.exports = mongoose.model('CargosPendientes', cargosPendientesSchema);
