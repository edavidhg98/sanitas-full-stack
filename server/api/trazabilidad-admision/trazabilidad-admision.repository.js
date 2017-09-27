const TrazabilidadAdmision = require('./trazabilidad-admision.model');

module.exports = {
  get() {
    return TrazabilidadAdmision.find();
  },
  getById(id) {
    return TrazabilidadAdmision.findById(id)
          .populate('sucursal').populate('tipoAdmision').populate('consultorio').populate('motivo').populate('motivo').populate('motivo')
          .populate('trazabilidadAdmisionListaEsperaHistoriaClinicas').populate('trazabilidadAdmisionCargoss')
  },
  add(trazabilidadAdmision) {
    const _trazabilidadAdmision = new TrazabilidadAdmision(trazabilidadAdmision);
    return _trazabilidadAdmision.save();
  },
  update(id, trazabilidadAdmision) {
    return TrazabilidadAdmision.findByIdAndUpdate(id, trazabilidadAdmision, { new: true, runValidators: true });
  },
  remove(id) {
    return TrazabilidadAdmision.findByIdAndRemove(id);
  }
};
