const CargoAutomatico = require('./cargo-automatico.model');

module.exports = {
  get() {
    return CargoAutomatico.find();
  },
  getById(id) {
    return CargoAutomatico.findById(id)
          .populate('sucursal').populate('entidad').populate('procedimiento')
          
  },
  add(cargoAutomatico) {
    const _cargoAutomatico = new CargoAutomatico(cargoAutomatico);
    return _cargoAutomatico.save();
  },
  update(id, cargoAutomatico) {
    return CargoAutomatico.findByIdAndUpdate(id, cargoAutomatico, { new: true, runValidators: true });
  },
  remove(id) {
    return CargoAutomatico.findByIdAndRemove(id);
  }
};
