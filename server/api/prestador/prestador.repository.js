const Prestador = require('./prestador.model');

module.exports = {
  get() {
    return Prestador.find();
  },
  getById(id) {
    return Prestador.findById(id)
          .populate('ciudad')
          .populate('centroCostoValidos').populate('medicamentoAltoCostos').populate('sucursals').populate('sustitutoss').populate('procedimientoCentroCostos').populate('excepcionProductos').populate('prestadorCentroCostoUnicos').populate('recargos')
  },
  add(prestador) {
    const _prestador = new Prestador(prestador);
    return _prestador.save();
  },
  update(id, prestador) {
    return Prestador.findByIdAndUpdate(id, prestador, { new: true, runValidators: true });
  },
  remove(id) {
    return Prestador.findByIdAndRemove(id);
  }
};
