const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pypProgramasSchema = new Schema({
  codPrograma: { type: Number },  
  descripcion: { type: String },  
  idAdmision: { type: Number },  
  itemListaEstadoscyf: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
pypProgramasSchema.virtual('pypProcedimientoProgramas', {
  ref: 'PypProcedimientoPrograma',
  localField: '_id',
  foreignField: 'idPypProgramas'
});

module.exports = mongoose.model('PypProgramas', pypProgramasSchema);
