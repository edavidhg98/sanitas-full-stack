const AdmisionObservaciones = require('./admision-observaciones.model');

module.exports = {
  get() {
    return AdmisionObservaciones.find();
  },
  getById(id) {
    return AdmisionObservaciones.findById(id)
          .populate('cama').populate('motivo')
          
  },
  add(admisionObservaciones) {
    const _admisionObservaciones = new AdmisionObservaciones(admisionObservaciones);
    return _admisionObservaciones.save();
  },
  update(id, admisionObservaciones) {
    return AdmisionObservaciones.findByIdAndUpdate(id, admisionObservaciones, { new: true, runValidators: true });
  },
  remove(id) {
    return AdmisionObservaciones.findByIdAndRemove(id);
  }
};
