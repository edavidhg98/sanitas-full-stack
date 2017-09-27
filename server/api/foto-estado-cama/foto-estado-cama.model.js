const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fotoEstadoCamaSchema = new Schema({
  idfoto: { type: Number },  
  itemListaEstadoCama: { type: Number },  
  fechaRegistro: { type: Date },  
  loginRegistro: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
fotoEstadoCamaSchema.virtual('camas', {
  ref: 'Cama',
  localField: '_id',
  foreignField: 'idFotoEstadoCama'
});

module.exports = mongoose.model('FotoEstadoCama', fotoEstadoCamaSchema);
