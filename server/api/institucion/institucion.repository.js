const Institucion = require('./institucion.model');

module.exports = {
  get() {
    return Institucion.find();
  },
  getById(id) {
    return Institucion.findById(id)
          
          
  },
  add(institucion) {
    const _institucion = new Institucion(institucion);
    return _institucion.save();
  },
  update(id, institucion) {
    return Institucion.findByIdAndUpdate(id, institucion, { new: true, runValidators: true });
  },
  remove(id) {
    return Institucion.findByIdAndRemove(id);
  }
};
