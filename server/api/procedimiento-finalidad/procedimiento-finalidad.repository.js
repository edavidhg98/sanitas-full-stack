const ProcedimientoFinalidad = require('./procedimiento-finalidad.model');

module.exports = {
  get() {
    return ProcedimientoFinalidad.find();
  },
  getById(id) {
    return ProcedimientoFinalidad.findById(id)
          .populate('procedimiento')
          
  },
  add(procedimientoFinalidad) {
    const _procedimientoFinalidad = new ProcedimientoFinalidad(procedimientoFinalidad);
    return _procedimientoFinalidad.save();
  },
  update(id, procedimientoFinalidad) {
    return ProcedimientoFinalidad.findByIdAndUpdate(id, procedimientoFinalidad, { new: true, runValidators: true });
  },
  remove(id) {
    return ProcedimientoFinalidad.findByIdAndRemove(id);
  }
};
