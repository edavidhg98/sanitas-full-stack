const Auditoria = require('./auditoria.model');

module.exports = {
  get() {
    return Auditoria.find();
  },
  getById(id) {
    return Auditoria.findById(id)
          
          
  },
  add(auditoria) {
    const _auditoria = new Auditoria(auditoria);
    return _auditoria.save();
  },
  update(id, auditoria) {
    return Auditoria.findByIdAndUpdate(id, auditoria, { new: true, runValidators: true });
  },
  remove(id) {
    return Auditoria.findByIdAndRemove(id);
  }
};
