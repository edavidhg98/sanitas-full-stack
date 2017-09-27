const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consultaExternaPypSchema = new Schema({
  codigoPyp: { type: String },  
  descripcion: { type: String },  
  codigoPypcyd: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  

  /** Foreign Fields */
  
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
consultaExternaPypSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ConsultaExternaPyp', consultaExternaPypSchema);
