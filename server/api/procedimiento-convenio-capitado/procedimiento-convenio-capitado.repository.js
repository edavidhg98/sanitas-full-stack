const ProcedimientoConvenioCapitado = require('./procedimiento-convenio-capitado.model');

module.exports = {
  get() {
    return ProcedimientoConvenioCapitado.find();
  },
  getById(id) {
    return ProcedimientoConvenioCapitado.findById(id)
          .populate('sucursalEntidad').populate('tipoAdmision').populate('procedimiento')
          
  },
  add(procedimientoConvenioCapitado) {
    const _procedimientoConvenioCapitado = new ProcedimientoConvenioCapitado(procedimientoConvenioCapitado);
    return _procedimientoConvenioCapitado.save();
  },
  update(id, procedimientoConvenioCapitado) {
    return ProcedimientoConvenioCapitado.findByIdAndUpdate(id, procedimientoConvenioCapitado, { new: true, runValidators: true });
  },
  remove(id) {
    return ProcedimientoConvenioCapitado.findByIdAndRemove(id);
  }
};
