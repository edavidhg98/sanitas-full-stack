const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoAnestesiaSchema = new Schema({
  tipoAnestesia: { type: String },  
  descripcion: { type: String },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  
  observaciones: { type: String },  
  idPrestador: { type: Number },  

  /** Foreign Fields */
  
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
tipoAnestesiaSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('TipoAnestesia', tipoAnestesiaSchema);
