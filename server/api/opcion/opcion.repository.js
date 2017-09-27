const Opcion = require('./opcion.model');

module.exports = {
  get() {
    return Opcion.find();
  },
  getById(id) {
    return Opcion.findById(id)
          
          
  },
  add(opcion) {
    const _opcion = new Opcion(opcion);
    return _opcion.save();
  },
  update(id, opcion) {
    return Opcion.findByIdAndUpdate(id, opcion, { new: true, runValidators: true });
  },
  remove(id) {
    return Opcion.findByIdAndRemove(id);
  }
};
