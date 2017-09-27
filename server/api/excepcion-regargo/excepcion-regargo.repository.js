const ExcepcionRegargo = require('./excepcion-regargo.model');

module.exports = {
  get() {
    return ExcepcionRegargo.find();
  },
  getById(id) {
    return ExcepcionRegargo.findById(id)
          .populate('sucursal').populate('tipoAdmision').populate('entidad').populate('procedimiento')
          
  },
  add(excepcionRegargo) {
    const _excepcionRegargo = new ExcepcionRegargo(excepcionRegargo);
    return _excepcionRegargo.save();
  },
  update(id, excepcionRegargo) {
    return ExcepcionRegargo.findByIdAndUpdate(id, excepcionRegargo, { new: true, runValidators: true });
  },
  remove(id) {
    return ExcepcionRegargo.findByIdAndRemove(id);
  }
};
