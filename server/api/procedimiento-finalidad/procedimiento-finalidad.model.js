const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const procedimientoFinalidadSchema = new Schema({
  finalidad: { type: String },  

  /** Foreign Fields */
  
  idProcedimiento: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
procedimientoFinalidadSchema.virtual('procedimiento', {
  ref: 'Procedimiento',
  localField: 'idProcedimiento',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('ProcedimientoFinalidad', procedimientoFinalidadSchema);
