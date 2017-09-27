const Producto = require('./producto.model');

module.exports = {
  get() {
    return Producto.find();
  },
  getById(id) {
    return Producto.findById(id)
          .populate('unidadMedidaPedido').populate('unidadMedidaPedido').populate('unidadMedidaPedido')
          .populate('medicamentoAltoCostos').populate('sustitutoss').populate('sustitutoss').populate('excepcionProductos')
  },
  add(producto) {
    const _producto = new Producto(producto);
    return _producto.save();
  },
  update(id, producto) {
    return Producto.findByIdAndUpdate(id, producto, { new: true, runValidators: true });
  },
  remove(id) {
    return Producto.findByIdAndRemove(id);
  }
};
