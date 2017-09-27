const HomologacionEntidad = require('./homologacion-entidad.model');

module.exports = {
  get() {
    return HomologacionEntidad.find();
  },
  getById(id) {
    return HomologacionEntidad.findById(id)
          .populate('entidad').populate('entidad')
          
  },
  add(homologacionEntidad) {
    const _homologacionEntidad = new HomologacionEntidad(homologacionEntidad);
    return _homologacionEntidad.save();
  },
  update(id, homologacionEntidad) {
    return HomologacionEntidad.findByIdAndUpdate(id, homologacionEntidad, { new: true, runValidators: true });
  },
  remove(id) {
    return HomologacionEntidad.findByIdAndRemove(id);
  }
};
