const AuditoriaContrato = require('./auditoria-contrato.model');

module.exports = {
  get() {
    return AuditoriaContrato.find();
  },
  getById(id) {
    return AuditoriaContrato.findById(id)
          .populate('entidad')
          
  },
  add(auditoriaContrato) {
    const _auditoriaContrato = new AuditoriaContrato(auditoriaContrato);
    return _auditoriaContrato.save();
  },
  update(id, auditoriaContrato) {
    return AuditoriaContrato.findByIdAndUpdate(id, auditoriaContrato, { new: true, runValidators: true });
  },
  remove(id) {
    return AuditoriaContrato.findByIdAndRemove(id);
  }
};
