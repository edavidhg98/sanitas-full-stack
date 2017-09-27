const Localidad = require('./localidad.model');

module.exports = {
  get() {
    return Localidad.find();
  },
  getById(id) {
    return Localidad.findById(id)
          .populate('ciudad')
          
  },
  add(localidad) {
    const _localidad = new Localidad(localidad);
    return _localidad.save();
  },
  update(id, localidad) {
    return Localidad.findByIdAndUpdate(id, localidad, { new: true, runValidators: true });
  },
  remove(id) {
    return Localidad.findByIdAndRemove(id);
  }
};
