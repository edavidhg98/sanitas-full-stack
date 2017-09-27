const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
  idAdmision: { type: Number },  
  minutoPedido: { type: Number },  
  fechaRegistro: { type: Date },  
  idCentroCostoDestino: { type: Number },  
  idMedicoAtiende: { type: Number },  
  itemListaEstadoPedido: { type: Number },  
  consecutivoManual: { type: Number },  
  fechaDespacho: { type: Date },  
  horaPedido: { type: Number },  
  loginDespacho: { type: String },  
  horaDespacho: { type: Number },  
  observaciones: { type: String },  
  loginPedido: { type: String },  
  pedidoManual: { type: String },  
  itemListaTipoPedido: { type: Number },  
  idCentroCosto: { type: Number },  
  consecutivoSolicitud: { type: Number },  
  fechaPedido: { type: Date },  
  minutoDespacho: { type: Number },  

  /** Foreign Fields */
  
  idPrioridad: { type: Schema.Types.ObjectId },
  idSucursal: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
pedidosSchema.virtual('prioridad', {
  ref: 'Prioridad',
  localField: 'idPrioridad',
  foreignField: '_id',
  justOne: true
});
pedidosSchema.virtual('sucursal', {
  ref: 'Sucursal',
  localField: 'idSucursal',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('Pedidos', pedidosSchema);
