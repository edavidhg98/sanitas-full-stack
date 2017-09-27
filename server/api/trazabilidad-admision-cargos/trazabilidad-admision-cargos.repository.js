const TrazabilidadAdmisionCargos = require('./trazabilidad-admision-cargos.model');

module.exports = {
  get() {
    return TrazabilidadAdmisionCargos.find();
  },
  getById(id) {
    return TrazabilidadAdmisionCargos.findById(id)
          .populate('trazabilidadAdmision')
          
  },
  add(trazabilidadAdmisionCargos) {
    const _trazabilidadAdmisionCargos = new TrazabilidadAdmisionCargos(trazabilidadAdmisionCargos);
    return _trazabilidadAdmisionCargos.save();
  },
  update(id, trazabilidadAdmisionCargos) {
    return TrazabilidadAdmisionCargos.findByIdAndUpdate(id, trazabilidadAdmisionCargos, { new: true, runValidators: true });
  },
  remove(id) {
    return TrazabilidadAdmisionCargos.findByIdAndRemove(id);
  }
};
