const TiempoRecargo = require('./tiempo-recargo.model');

module.exports = {
  get() {
    return TiempoRecargo.find();
  },
  getById(id) {
    return TiempoRecargo.findById(id)
          .populate('sucursalEntidad')
          
  },
  add(tiempoRecargo) {
    const _tiempoRecargo = new TiempoRecargo(tiempoRecargo);
    return _tiempoRecargo.save();
  },
  update(id, tiempoRecargo) {
    return TiempoRecargo.findByIdAndUpdate(id, tiempoRecargo, { new: true, runValidators: true });
  },
  remove(id) {
    return TiempoRecargo.findByIdAndRemove(id);
  }
};
