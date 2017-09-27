const CitaRetraso = require('./cita-retraso.model');

module.exports = {
  get() {
    return CitaRetraso.find();
  },
  getById(id) {
    return CitaRetraso.findById(id)
          .populate('entidad').populate('sucursal')
          
  },
  add(citaRetraso) {
    const _citaRetraso = new CitaRetraso(citaRetraso);
    return _citaRetraso.save();
  },
  update(id, citaRetraso) {
    return CitaRetraso.findByIdAndUpdate(id, citaRetraso, { new: true, runValidators: true });
  },
  remove(id) {
    return CitaRetraso.findByIdAndRemove(id);
  }
};
