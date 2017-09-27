const DetalleCargosPendientes = require('./detalle-cargos-pendientes.model');

module.exports = {
  get() {
    return DetalleCargosPendientes.find();
  },
  getById(id) {
    return DetalleCargosPendientes.findById(id)
          .populate('cargosPendientes').populate('entidad').populate('motivo').populate('procedimiento')
          
  },
  add(detalleCargosPendientes) {
    const _detalleCargosPendientes = new DetalleCargosPendientes(detalleCargosPendientes);
    return _detalleCargosPendientes.save();
  },
  update(id, detalleCargosPendientes) {
    return DetalleCargosPendientes.findByIdAndUpdate(id, detalleCargosPendientes, { new: true, runValidators: true });
  },
  remove(id) {
    return DetalleCargosPendientes.findByIdAndRemove(id);
  }
};
