const ProcedimientoEntidad = require('./procedimiento-entidad.model');

module.exports = {
  get() {
    return ProcedimientoEntidad.find();
  },
  getById(id) {
    return ProcedimientoEntidad.findById(id)
          .populate('entidad').populate('procedimiento')
          
  },
  add(procedimientoEntidad) {
    const _procedimientoEntidad = new ProcedimientoEntidad(procedimientoEntidad);
    return _procedimientoEntidad.save();
  },
  update(id, procedimientoEntidad) {
    return ProcedimientoEntidad.findByIdAndUpdate(id, procedimientoEntidad, { new: true, runValidators: true });
  },
  remove(id) {
    return ProcedimientoEntidad.findByIdAndRemove(id);
  }
};
