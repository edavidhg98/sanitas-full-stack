const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rutaLiquidacionSchema = new Schema({

}, { toJSON: { virtuals: true } });



module.exports = mongoose.model('RutaLiquidacion', rutaLiquidacionSchema);
