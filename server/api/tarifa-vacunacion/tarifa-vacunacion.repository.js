const TarifaVacunacion = require('./tarifa-vacunacion.model');

module.exports = {
  get() {
    return TarifaVacunacion.find();
  },
  getById(id) {
    return TarifaVacunacion.findById(id)
          .populate('sucursalEntidad').populate('tipoTarifaVacunacion').populate('vacunas')
          
  },
  add(tarifaVacunacion) {
    const _tarifaVacunacion = new TarifaVacunacion(tarifaVacunacion);
    return _tarifaVacunacion.save();
  },
  update(id, tarifaVacunacion) {
    return TarifaVacunacion.findByIdAndUpdate(id, tarifaVacunacion, { new: true, runValidators: true });
  },
  remove(id) {
    return TarifaVacunacion.findByIdAndRemove(id);
  }
};
