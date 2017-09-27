const NumeroSecuencia = require('./numero-secuencia.model');

module.exports = {
  get() {
    return NumeroSecuencia.find();
  },
  getById(id) {
    return NumeroSecuencia.findById(id)
          .populate('sucursal')
          
  },
  add(numeroSecuencia) {
    const _numeroSecuencia = new NumeroSecuencia(numeroSecuencia);
    return _numeroSecuencia.save();
  },
  update(id, numeroSecuencia) {
    return NumeroSecuencia.findByIdAndUpdate(id, numeroSecuencia, { new: true, runValidators: true });
  },
  remove(id) {
    return NumeroSecuencia.findByIdAndRemove(id);
  }
};
