const Motivo = require('./motivo.model');

module.exports = {
  get() {
    return Motivo.find();
  },
  getById(id) {
    return Motivo.findById(id)
          .populate('tipoMotivo')
          .populate('admisionObservacioness').populate('censoTraslados').populate('detalleCargosPendientess').populate('trazabilidadAdmisions').populate('trazabilidadAdmisions').populate('trazabilidadAdmisions').populate('triages').populate('subconceptos').populate('pypProcedimientoProgramas')
  },
  add(motivo) {
    const _motivo = new Motivo(motivo);
    return _motivo.save();
  },
  update(id, motivo) {
    return Motivo.findByIdAndUpdate(id, motivo, { new: true, runValidators: true });
  },
  remove(id) {
    return Motivo.findByIdAndRemove(id);
  }
};
