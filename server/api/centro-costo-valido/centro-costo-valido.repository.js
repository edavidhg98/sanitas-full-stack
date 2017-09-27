const CentroCostoValido = require('./centro-costo-valido.model');

module.exports = {
  get() {
    return CentroCostoValido.find();
  },
  getById(id) {
    return CentroCostoValido.findById(id)
          .populate('centroCostoValido').populate('centroCostoValido').populate('prestador')
          
  },
  add(centroCostoValido) {
    const _centroCostoValido = new CentroCostoValido(centroCostoValido);
    return _centroCostoValido.save();
  },
  update(id, centroCostoValido) {
    return CentroCostoValido.findByIdAndUpdate(id, centroCostoValido, { new: true, runValidators: true });
  },
  remove(id) {
    return CentroCostoValido.findByIdAndRemove(id);
  }
};
