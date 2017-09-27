const PrestadorCentroCostoUnico = require('./prestador-centro-costo-unico.model');

module.exports = {
  get() {
    return PrestadorCentroCostoUnico.find();
  },
  getById(id) {
    return PrestadorCentroCostoUnico.findById(id)
          .populate('prestador')
          
  },
  add(prestadorCentroCostoUnico) {
    const _prestadorCentroCostoUnico = new PrestadorCentroCostoUnico(prestadorCentroCostoUnico);
    return _prestadorCentroCostoUnico.save();
  },
  update(id, prestadorCentroCostoUnico) {
    return PrestadorCentroCostoUnico.findByIdAndUpdate(id, prestadorCentroCostoUnico, { new: true, runValidators: true });
  },
  remove(id) {
    return PrestadorCentroCostoUnico.findByIdAndRemove(id);
  }
};
