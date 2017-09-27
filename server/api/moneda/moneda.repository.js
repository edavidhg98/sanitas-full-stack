const Moneda = require('./moneda.model');

module.exports = {
  get() {
    return Moneda.find();
  },
  getById(id) {
    return Moneda.findById(id)
          
          .populate('sucursalEntidads')
  },
  add(moneda) {
    const _moneda = new Moneda(moneda);
    return _moneda.save();
  },
  update(id, moneda) {
    return Moneda.findByIdAndUpdate(id, moneda, { new: true, runValidators: true });
  },
  remove(id) {
    return Moneda.findByIdAndRemove(id);
  }
};
