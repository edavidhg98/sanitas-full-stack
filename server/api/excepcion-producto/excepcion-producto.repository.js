const ExcepcionProducto = require('./excepcion-producto.model');

module.exports = {
  get() {
    return ExcepcionProducto.find();
  },
  getById(id) {
    return ExcepcionProducto.findById(id)
          .populate('entidad').populate('prestador').populate('producto')
          
  },
  add(excepcionProducto) {
    const _excepcionProducto = new ExcepcionProducto(excepcionProducto);
    return _excepcionProducto.save();
  },
  update(id, excepcionProducto) {
    return ExcepcionProducto.findByIdAndUpdate(id, excepcionProducto, { new: true, runValidators: true });
  },
  remove(id) {
    return ExcepcionProducto.findByIdAndRemove(id);
  }
};
