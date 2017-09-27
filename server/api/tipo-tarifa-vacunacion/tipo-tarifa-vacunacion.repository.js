const TipoTarifaVacunacion = require('./tipo-tarifa-vacunacion.model');

module.exports = {
  get() {
    return TipoTarifaVacunacion.find();
  },
  getById(id) {
    return TipoTarifaVacunacion.findById(id)
          
          .populate('tarifaVacunacions')
  },
  add(tipoTarifaVacunacion) {
    const _tipoTarifaVacunacion = new TipoTarifaVacunacion(tipoTarifaVacunacion);
    return _tipoTarifaVacunacion.save();
  },
  update(id, tipoTarifaVacunacion) {
    return TipoTarifaVacunacion.findByIdAndUpdate(id, tipoTarifaVacunacion, { new: true, runValidators: true });
  },
  remove(id) {
    return TipoTarifaVacunacion.findByIdAndRemove(id);
  }
};
