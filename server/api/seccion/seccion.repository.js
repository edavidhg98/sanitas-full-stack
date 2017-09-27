const Seccion = require('./seccion.model');

module.exports = {
  get() {
    return Seccion.find();
  },
  getById(id) {
    return Seccion.findById(id)
          .populate('sucursal')
          .populate('camas')
  },
  add(seccion) {
    const _seccion = new Seccion(seccion);
    return _seccion.save();
  },
  update(id, seccion) {
    return Seccion.findByIdAndUpdate(id, seccion, { new: true, runValidators: true });
  },
  remove(id) {
    return Seccion.findByIdAndRemove(id);
  }
};
