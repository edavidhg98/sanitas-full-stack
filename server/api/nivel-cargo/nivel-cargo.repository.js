const NivelCargo = require('./nivel-cargo.model');

module.exports = {
  get() {
    return NivelCargo.find();
  },
  getById(id) {
    return NivelCargo.findById(id)
          .populate('sucursalEntidad').populate('tipoAdmision')
          
  },
  add(nivelCargo) {
    const _nivelCargo = new NivelCargo(nivelCargo);
    return _nivelCargo.save();
  },
  update(id, nivelCargo) {
    return NivelCargo.findByIdAndUpdate(id, nivelCargo, { new: true, runValidators: true });
  },
  remove(id) {
    return NivelCargo.findByIdAndRemove(id);
  }
};
