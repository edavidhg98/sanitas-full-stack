const EntidadAdmision = require('./entidad-admision.model');

module.exports = {
  get() {
    return EntidadAdmision.find();
  },
  getById(id) {
    return EntidadAdmision.findById(id)
          .populate('sucursal').populate('entidad')
          
  },
  add(entidadAdmision) {
    const _entidadAdmision = new EntidadAdmision(entidadAdmision);
    return _entidadAdmision.save();
  },
  update(id, entidadAdmision) {
    return EntidadAdmision.findByIdAndUpdate(id, entidadAdmision, { new: true, runValidators: true });
  },
  remove(id) {
    return EntidadAdmision.findByIdAndRemove(id);
  }
};
