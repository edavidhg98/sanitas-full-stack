const Anticipo = require('./anticipo.model');

module.exports = {
  get() {
    return Anticipo.find();
  },
  getById(id) {
    return Anticipo.findById(id)
          .populate('sucursal').populate('entidad').populate('procedimiento')
          
  },
  add(anticipo) {
    const _anticipo = new Anticipo(anticipo);
    return _anticipo.save();
  },
  update(id, anticipo) {
    return Anticipo.findByIdAndUpdate(id, anticipo, { new: true, runValidators: true });
  },
  remove(id) {
    return Anticipo.findByIdAndRemove(id);
  }
};
