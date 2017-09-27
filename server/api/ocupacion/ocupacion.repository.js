const Ocupacion = require('./ocupacion.model');

module.exports = {
  get() {
    return Ocupacion.find();
  },
  getById(id) {
    return Ocupacion.findById(id)
          
          
  },
  add(ocupacion) {
    const _ocupacion = new Ocupacion(ocupacion);
    return _ocupacion.save();
  },
  update(id, ocupacion) {
    return Ocupacion.findByIdAndUpdate(id, ocupacion, { new: true, runValidators: true });
  },
  remove(id) {
    return Ocupacion.findByIdAndRemove(id);
  }
};
