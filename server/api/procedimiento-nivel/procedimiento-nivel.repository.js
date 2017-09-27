const ProcedimientoNivel = require('./procedimiento-nivel.model');

module.exports = {
  get() {
    return ProcedimientoNivel.find();
  },
  getById(id) {
    return ProcedimientoNivel.findById(id)
          .populate('procedimiento').populate('procedimiento').populate('sucursal')
          
  },
  add(procedimientoNivel) {
    const _procedimientoNivel = new ProcedimientoNivel(procedimientoNivel);
    return _procedimientoNivel.save();
  },
  update(id, procedimientoNivel) {
    return ProcedimientoNivel.findByIdAndUpdate(id, procedimientoNivel, { new: true, runValidators: true });
  },
  remove(id) {
    return ProcedimientoNivel.findByIdAndRemove(id);
  }
};
