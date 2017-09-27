const CargosPendientes = require('./cargos-pendientes.model');

module.exports = {
  get() {
    return CargosPendientes.find();
  },
  getById(id) {
    return CargosPendientes.findById(id)
          .populate('prioridad').populate('sucursal').populate('entidad')
          .populate('detalleCargosPendientess')
  },
  add(cargosPendientes) {
    const _cargosPendientes = new CargosPendientes(cargosPendientes);
    return _cargosPendientes.save();
  },
  update(id, cargosPendientes) {
    return CargosPendientes.findByIdAndUpdate(id, cargosPendientes, { new: true, runValidators: true });
  },
  remove(id) {
    return CargosPendientes.findByIdAndRemove(id);
  }
};
