const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detalleCargosPendientesSchema = new Schema({
  secuencia: { type: Number },  
  cantidadEntregada: { type: Number },  
  itemListaEstadoEnvio: { type: Number },  
  durante: { type: Number },  
  cantidadSolicita: { type: Number },  
  porPocentaje: { type: Number },  
  cantidadAplicada: { type: Number },  
  idProducto: { type: Number },  
  cantidadSuministrada: { type: Number },  
  atcSolicitado: { type: String },  
  horaDespacho: { type: Number },  
  fechaRegistro: { type: Date },  
  minutoDespacho: { type: Number },  
  confirmacionManual: { type: String },  
  medMollier: { type: String },  
  porIncremento: { type: Number },  
  loginRegistro: { type: String },  
  fechaDespacho: { type: Date },  
  loginCancel: { type: String },  
  itemListaEstado: { type: Number },  
  valCompra: { type: Number },  
  cantidadDespachada: { type: Number },  
  itemListaTipoCargo: { type: Number },  
  numeroAutorizacion: { type: String },  
  numPeddevuelto: { type: Number },  
  presentacion: { type: String },  
  observaciones: { type: String },  
  itemListaMedidaMedicamento: { type: Number },  
  cantidadRecibida: { type: Number },  

  /** Foreign Fields */
  
  idCargosPendientes: { type: Schema.Types.ObjectId },
  idEntidad: { type: Schema.Types.ObjectId },
  idMotivo: { type: Schema.Types.ObjectId },
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
detalleCargosPendientesSchema.virtual('cargosPendientes', {
  ref: 'CargosPendientes',
  localField: 'idCargosPendientes',
  foreignField: '_id',
  justOne: true
});
detalleCargosPendientesSchema.virtual('entidad', {
  ref: 'Entidad',
  localField: 'idEntidad',
  foreignField: '_id',
  justOne: true
});
detalleCargosPendientesSchema.virtual('motivo', {
  ref: 'Motivo',
  localField: 'idMotivo',
  foreignField: '_id',
  justOne: true
});
detalleCargosPendientesSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('DetalleCargosPendientes', detalleCargosPendientesSchema);
