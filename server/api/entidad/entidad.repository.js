const Entidad = require('./entidad.model');

module.exports = {
  get() {
    return Entidad.find();
  },
  getById(id) {
    return Entidad.findById(id)
          .populate('ciudad')
          .populate('anticipos').populate('auditoriaContratos').populate('camaPlans').populate('cargoAutomaticos').populate('cargosPendientess').populate('citaRetrasos').populate('detalleCargosPendientess').populate('entidadUvrs').populate('epsRecobrables').populate('excepcionRegargos').populate('homologacionServiciosAgfas').populate('pacienteInconsistenciass').populate('procedimientoEntidads').populate('recalculoAutomaticos').populate('sucursals').populate('sucursalEntidads').populate('tipoCirugias').populate('tipoPlans').populate('entidadAdmisions').populate('excepcionProductos').populate('grupoEtareos').populate('homologacionEntidads').populate('homologacionEntidads').populate('medicamentoAltoCostos').populate('planess').populate('recargoAutomaticos').populate('tiposDocumentoEntidads').populate('triages')
  },
  add(entidad) {
    const _entidad = new Entidad(entidad);
    return _entidad.save();
  },
  update(id, entidad) {
    return Entidad.findByIdAndUpdate(id, entidad, { new: true, runValidators: true });
  },
  remove(id) {
    return Entidad.findByIdAndRemove(id);
  }
};
