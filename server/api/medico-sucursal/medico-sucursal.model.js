const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicoSucursalSchema = new Schema({
  idSucursal: { type: Number },  
  idConceptoPorcentaje: { type: Number },  
  itemListaTipoDescuento: { type: Number },  
  idConceptoMinimoMensual: { type: Number },  
  alquilerHora: { type: Number },  
  idConceptoAlquiler: { type: Number },  
  direccionCasaMedico: { type: String },  
  itemListaAlquiler: { type: Number },  
  direccionConsultorioMedico: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  itemListaTipoCargo: { type: Number },  
  idEspecialidad: { type: Number },  
  observaciones: { type: String },  
  itemListaSueldo: { type: Number },  
  fechaFinalRemision: { type: Date },  
  asociacion: { type: String },  
  itemListaTipoServicioConcertado: { type: Number },  
  alquilerAnual: { type: Number },  
  alquilerSemanal: { type: Number },  
  idConceptoSueldo: { type: Number },  
  itemListaEstadoMedicoSucursal: { type: Number },  
  valorMinimoMensual: { type: Number },  
  telefonoCasaMedico: { type: String },  
  itemListaMinimoAnual: { type: Number },  
  valorMinimoAnual: { type: Number },  
  valorSueldo: { type: Number },  
  idConceptoMinimoAnual: { type: Number },  
  valorPorcentaje: { type: Number },  
  irpf: { type: Number },  
  itemListaNivelMedico: { type: Number },  
  fechaInicialRemision: { type: Date },  
  itemListaMinimoMensual: { type: Number },  
  alquilerMensual: { type: Number },  
  telefonoConsultorioMedico: { type: String },  
  idMedico: { type: Number },  
  idMedicoReemplazo: { type: Number },  
  itemListaUrgencias: { type: Number },  
  itemListaReemplazo: { type: Number },  
  ivaArriendo: { type: Number },  
  itemListaTipoProveedor: { type: Number },  

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('MedicoSucursal', medicoSucursalSchema);
