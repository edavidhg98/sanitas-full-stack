const SucursalCentroCosto = require('./sucursal-centro-costo.model');

module.exports = {
  get() {
    return SucursalCentroCosto.find();
  },
  getById(id) {
    return SucursalCentroCosto.findById(id)
          
          
  },
  add(sucursalCentroCosto) {
    const _sucursalCentroCosto = new SucursalCentroCosto(sucursalCentroCosto);
    return _sucursalCentroCosto.save();
  },
  update(id, sucursalCentroCosto) {
    return SucursalCentroCosto.findByIdAndUpdate(id, sucursalCentroCosto, { new: true, runValidators: true });
  },
  remove(id) {
    return SucursalCentroCosto.findByIdAndRemove(id);
  }
};
