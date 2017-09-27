const EstadoSalidaPaciente = require('./estado-salida-paciente.model');

module.exports = {
  get() {
    return EstadoSalidaPaciente.find();
  },
  getById(id) {
    return EstadoSalidaPaciente.findById(id)
          
          
  },
  add(estadoSalidaPaciente) {
    const _estadoSalidaPaciente = new EstadoSalidaPaciente(estadoSalidaPaciente);
    return _estadoSalidaPaciente.save();
  },
  update(id, estadoSalidaPaciente) {
    return EstadoSalidaPaciente.findByIdAndUpdate(id, estadoSalidaPaciente, { new: true, runValidators: true });
  },
  remove(id) {
    return EstadoSalidaPaciente.findByIdAndRemove(id);
  }
};
