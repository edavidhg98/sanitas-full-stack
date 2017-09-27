const AuditoriaEstadoAdmision = require('./auditoria-estado-admision.model');

module.exports = {
  get() {
    return AuditoriaEstadoAdmision.find();
  },
  getById(id) {
    return AuditoriaEstadoAdmision.findById(id)
          
          
  },
  add(auditoriaEstadoAdmision) {
    const _auditoriaEstadoAdmision = new AuditoriaEstadoAdmision(auditoriaEstadoAdmision);
    return _auditoriaEstadoAdmision.save();
  },
  update(id, auditoriaEstadoAdmision) {
    return AuditoriaEstadoAdmision.findByIdAndUpdate(id, auditoriaEstadoAdmision, { new: true, runValidators: true });
  },
  remove(id) {
    return AuditoriaEstadoAdmision.findByIdAndRemove(id);
  }
};
