const ProcedimientoCentroCosto = require('./procedimiento-centro-costo.model');

module.exports = {
  get() {
    return ProcedimientoCentroCosto.find();
  },
  getById(id) {
    return ProcedimientoCentroCosto.findById(id)
          .populate('prestador').populate('sucursal').populate('procedimiento')
          
  },
  add(procedimientoCentroCosto) {
    const _procedimientoCentroCosto = new ProcedimientoCentroCosto(procedimientoCentroCosto);
    return _procedimientoCentroCosto.save();
  },
  update(id, procedimientoCentroCosto) {
    return ProcedimientoCentroCosto.findByIdAndUpdate(id, procedimientoCentroCosto, { new: true, runValidators: true });
  },
  remove(id) {
    return ProcedimientoCentroCosto.findByIdAndRemove(id);
  }
};
