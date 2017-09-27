const Salas = require('./salas.model');

module.exports = {
  get() {
    return Salas.find();
  },
  getById(id) {
    return Salas.findById(id)
          .populate('sucursal')
          
  },
  add(salas) {
    const _salas = new Salas(salas);
    return _salas.save();
  },
  update(id, salas) {
    return Salas.findByIdAndUpdate(id, salas, { new: true, runValidators: true });
  },
  remove(id) {
    return Salas.findByIdAndRemove(id);
  }
};
