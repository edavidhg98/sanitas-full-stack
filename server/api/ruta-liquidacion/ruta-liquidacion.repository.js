const RutaLiquidacion = require('./ruta-liquidacion.model');

module.exports = {
  get() {
    return RutaLiquidacion.find();
  },
  getById(id) {
    return RutaLiquidacion.findById(id)
          
          
  },
  add(rutaLiquidacion) {
    const _rutaLiquidacion = new RutaLiquidacion(rutaLiquidacion);
    return _rutaLiquidacion.save();
  },
  update(id, rutaLiquidacion) {
    return RutaLiquidacion.findByIdAndUpdate(id, rutaLiquidacion, { new: true, runValidators: true });
  },
  remove(id) {
    return RutaLiquidacion.findByIdAndRemove(id);
  }
};
