const PypProcedimientoPrograma = require('./pyp-procedimiento-programa.model');

module.exports = {
  get() {
    return PypProcedimientoPrograma.find();
  },
  getById(id) {
    return PypProcedimientoPrograma.findById(id)
          .populate('motivo').populate('procedimiento').populate('pypProgramas')
          
  },
  add(pypProcedimientoPrograma) {
    const _pypProcedimientoPrograma = new PypProcedimientoPrograma(pypProcedimientoPrograma);
    return _pypProcedimientoPrograma.save();
  },
  update(id, pypProcedimientoPrograma) {
    return PypProcedimientoPrograma.findByIdAndUpdate(id, pypProcedimientoPrograma, { new: true, runValidators: true });
  },
  remove(id) {
    return PypProcedimientoPrograma.findByIdAndRemove(id);
  }
};
