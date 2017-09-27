const UnidadMedidaPedido = require('./unidad-medida-pedido.model');

module.exports = {
  get() {
    return UnidadMedidaPedido.find();
  },
  getById(id) {
    return UnidadMedidaPedido.findById(id)
          
          .populate('productos').populate('productos').populate('productos')
  },
  add(unidadMedidaPedido) {
    const _unidadMedidaPedido = new UnidadMedidaPedido(unidadMedidaPedido);
    return _unidadMedidaPedido.save();
  },
  update(id, unidadMedidaPedido) {
    return UnidadMedidaPedido.findByIdAndUpdate(id, unidadMedidaPedido, { new: true, runValidators: true });
  },
  remove(id) {
    return UnidadMedidaPedido.findByIdAndRemove(id);
  }
};
