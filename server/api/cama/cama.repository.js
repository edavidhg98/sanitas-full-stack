const Cama = require('./cama.model');

module.exports = {
  get() {
    return Cama.find();
  },
  getById(id) {
    return Cama.findById(id)
          .populate('fotoEstadoCama').populate('sucursal').populate('procedimiento').populate('procedimiento').populate('seccion').populate('tipoCama')
          .populate('admisionObservacioness').populate('censoHistoricos').populate('censoTraslados').populate('censoTraslados').populate('camaPlans')
  },
  add(cama) {
    const _cama = new Cama(cama);
    return _cama.save();
  },
  update(id, cama) {
    return Cama.findByIdAndUpdate(id, cama, { new: true, runValidators: true });
  },
  remove(id) {
    return Cama.findByIdAndRemove(id);
  }
};
