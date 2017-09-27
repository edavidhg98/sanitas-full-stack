const Procedimiento = require('./procedimiento.model');

module.exports = {
  get() {
    return Procedimiento.find();
  },
  getById(id) {
    return Procedimiento.findById(id)
          .populate('subGrupoProcedimiento')
          .populate('anticipos').populate('auditoriaSolicituds').populate('autorizacionBhs').populate('camas').populate('camas').populate('cargoAutomaticos').populate('consultaExternaPyps').populate('detalleCargosPendientess').populate('encabezadoResultados').populate('excepcionRegargos').populate('procedimientoConvenioCapitados').populate('procedimientoEntidads').populate('tipoAnestesias').populate('procedimientoCentroCostos').populate('procedimientoNivels').populate('procedimientoNivels').populate('procedimientosRiss').populate('pypProcedimientoProgramas').populate('procedimientoFinalidads')
  },
  add(procedimiento) {
    const _procedimiento = new Procedimiento(procedimiento);
    return _procedimiento.save();
  },
  update(id, procedimiento) {
    return Procedimiento.findByIdAndUpdate(id, procedimiento, { new: true, runValidators: true });
  },
  remove(id) {
    return Procedimiento.findByIdAndRemove(id);
  }
};
