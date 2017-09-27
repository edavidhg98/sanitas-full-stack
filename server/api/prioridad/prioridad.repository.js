const Prioridad = require('./prioridad.model');

module.exports = {
  get() {
    return Prioridad.find();
  },
  getById(id) {
    return Prioridad.findById(id)
          
          .populate('cargosPendientess').populate('pedidoss')
  },
  add(prioridad) {
    const _prioridad = new Prioridad(prioridad);
    return _prioridad.save();
  },
  update(id, prioridad) {
    return Prioridad.findByIdAndUpdate(id, prioridad, { new: true, runValidators: true });
  },
  remove(id) {
    return Prioridad.findByIdAndRemove(id);
  }
};
