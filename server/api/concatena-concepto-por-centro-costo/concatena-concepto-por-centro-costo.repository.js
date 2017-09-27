const ConcatenaConceptoPorCentroCosto = require('./concatena-concepto-por-centro-costo.model');

module.exports = {
  get() {
    return ConcatenaConceptoPorCentroCosto.find();
  },
  getById(id) {
    return ConcatenaConceptoPorCentroCosto.findById(id)
          .populate('sucursal')
          
  },
  add(concatenaConceptoPorCentroCosto) {
    const _concatenaConceptoPorCentroCosto = new ConcatenaConceptoPorCentroCosto(concatenaConceptoPorCentroCosto);
    return _concatenaConceptoPorCentroCosto.save();
  },
  update(id, concatenaConceptoPorCentroCosto) {
    return ConcatenaConceptoPorCentroCosto.findByIdAndUpdate(id, concatenaConceptoPorCentroCosto, { new: true, runValidators: true });
  },
  remove(id) {
    return ConcatenaConceptoPorCentroCosto.findByIdAndRemove(id);
  }
};
