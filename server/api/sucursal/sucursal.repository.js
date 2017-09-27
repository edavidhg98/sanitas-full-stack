const Sucursal = require('./sucursal.model');

module.exports = {
  get() {
    return Sucursal.find();
  },
  getById(id) {
    return Sucursal.findById(id)
          .populate('ciudad').populate('prestador').populate('entidad')
          .populate('anticipos').populate('camas').populate('cargoAutomaticos').populate('cargosPendientess').populate('censoHistoricos').populate('concatenaConceptoPorCentroCostos').populate('encabezadoResultados').populate('entidadAdmisions').populate('excepcionRegargos').populate('homologacionServiciosAgfas').populate('loginSucursals').populate('medicamentoAltoCostos').populate('medicoGrupoProcedimientos').populate('numeroSecuencias').populate('procedimientoCentroCostos').populate('recalculoAutomaticos').populate('salass').populate('sucursalEntidads').populate('trazabilidadAdmisions').populate('zonaHorariaVeranos').populate('censoServicios').populate('citaRetrasos').populate('consultorios').populate('grupoEtareos').populate('logins').populate('pedidoss').populate('procedimientoNivels').populate('seccions').populate('triages').populate('zonaHorarias')
  },
  add(sucursal) {
    const _sucursal = new Sucursal(sucursal);
    return _sucursal.save();
  },
  update(id, sucursal) {
    return Sucursal.findByIdAndUpdate(id, sucursal, { new: true, runValidators: true });
  },
  remove(id) {
    return Sucursal.findByIdAndRemove(id);
  }
};
