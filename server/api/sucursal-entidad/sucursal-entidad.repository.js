const SucursalEntidad = require('./sucursal-entidad.model');

module.exports = {
  get() {
    return SucursalEntidad.find();
  },
  getById(id) {
    return SucursalEntidad.findById(id)
          .populate('encabezadoCatalogo').populate('moneda').populate('sucursal').populate('entidad')
          .populate('nivelCargos').populate('procedimientoConvenioCapitados').populate('tiempoRecargos').populate('tarifaVacunacions')
  },
  add(sucursalEntidad) {
    const _sucursalEntidad = new SucursalEntidad(sucursalEntidad);
    return _sucursalEntidad.save();
  },
  update(id, sucursalEntidad) {
    return SucursalEntidad.findByIdAndUpdate(id, sucursalEntidad, { new: true, runValidators: true });
  },
  remove(id) {
    return SucursalEntidad.findByIdAndRemove(id);
  }
};
