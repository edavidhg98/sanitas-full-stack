const AuditoriaSolicitud = require('./auditoria-solicitud.model');

module.exports = {
  get() {
    return AuditoriaSolicitud.find();
  },
  getById(id) {
    return AuditoriaSolicitud.findById(id)
          .populate('procedimiento')
          
  },
  add(auditoriaSolicitud) {
    const _auditoriaSolicitud = new AuditoriaSolicitud(auditoriaSolicitud);
    return _auditoriaSolicitud.save();
  },
  update(id, auditoriaSolicitud) {
    return AuditoriaSolicitud.findByIdAndUpdate(id, auditoriaSolicitud, { new: true, runValidators: true });
  },
  remove(id) {
    return AuditoriaSolicitud.findByIdAndRemove(id);
  }
};
