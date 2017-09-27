const EntidadUvr = require('./entidad-uvr.model');

module.exports = {
  get() {
    return EntidadUvr.find();
  },
  getById(id) {
    return EntidadUvr.findById(id)
          .populate('entidad')
          
  },
  add(entidadUvr) {
    const _entidadUvr = new EntidadUvr(entidadUvr);
    return _entidadUvr.save();
  },
  update(id, entidadUvr) {
    return EntidadUvr.findByIdAndUpdate(id, entidadUvr, { new: true, runValidators: true });
  },
  remove(id) {
    return EntidadUvr.findByIdAndRemove(id);
  }
};
