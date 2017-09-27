const PacienteInconsistencias = require('./paciente-inconsistencias.model');

module.exports = {
  get() {
    return PacienteInconsistencias.find();
  },
  getById(id) {
    return PacienteInconsistencias.findById(id)
          .populate('entidad')
          
  },
  add(pacienteInconsistencias) {
    const _pacienteInconsistencias = new PacienteInconsistencias(pacienteInconsistencias);
    return _pacienteInconsistencias.save();
  },
  update(id, pacienteInconsistencias) {
    return PacienteInconsistencias.findByIdAndUpdate(id, pacienteInconsistencias, { new: true, runValidators: true });
  },
  remove(id) {
    return PacienteInconsistencias.findByIdAndRemove(id);
  }
};
