const Pedidos = require('./pedidos.model');

module.exports = {
  get() {
    return Pedidos.find();
  },
  getById(id) {
    return Pedidos.findById(id)
          .populate('prioridad').populate('sucursal')
          
  },
  add(pedidos) {
    const _pedidos = new Pedidos(pedidos);
    return _pedidos.save();
  },
  update(id, pedidos) {
    return Pedidos.findByIdAndUpdate(id, pedidos, { new: true, runValidators: true });
  },
  remove(id) {
    return Pedidos.findByIdAndRemove(id);
  }
};
