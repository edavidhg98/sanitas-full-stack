const MedicamentoAltoCosto = require('./medicamento-alto-costo.model');

module.exports = {
  get() {
    return MedicamentoAltoCosto.find();
  },
  getById(id) {
    return MedicamentoAltoCosto.findById(id)
          .populate('prestador').populate('producto').populate('sucursal').populate('entidad')
          
  },
  add(medicamentoAltoCosto) {
    const _medicamentoAltoCosto = new MedicamentoAltoCosto(medicamentoAltoCosto);
    return _medicamentoAltoCosto.save();
  },
  update(id, medicamentoAltoCosto) {
    return MedicamentoAltoCosto.findByIdAndUpdate(id, medicamentoAltoCosto, { new: true, runValidators: true });
  },
  remove(id) {
    return MedicamentoAltoCosto.findByIdAndRemove(id);
  }
};
