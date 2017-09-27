const EncabezadoResultado = require('./encabezado-resultado.model');

module.exports = {
  get() {
    return EncabezadoResultado.find();
  },
  getById(id) {
    return EncabezadoResultado.findById(id)
          .populate('sucursal').populate('procedimiento')
          
  },
  add(encabezadoResultado) {
    const _encabezadoResultado = new EncabezadoResultado(encabezadoResultado);
    return _encabezadoResultado.save();
  },
  update(id, encabezadoResultado) {
    return EncabezadoResultado.findByIdAndUpdate(id, encabezadoResultado, { new: true, runValidators: true });
  },
  remove(id) {
    return EncabezadoResultado.findByIdAndRemove(id);
  }
};
