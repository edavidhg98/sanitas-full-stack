const TipoAnestesia = require('./tipo-anestesia.model');

module.exports = {
  get() {
    return TipoAnestesia.find();
  },
  getById(id) {
    return TipoAnestesia.findById(id)
          .populate('procedimiento')
          
  },
  add(tipoAnestesia) {
    const _tipoAnestesia = new TipoAnestesia(tipoAnestesia);
    return _tipoAnestesia.save();
  },
  update(id, tipoAnestesia) {
    return TipoAnestesia.findByIdAndUpdate(id, tipoAnestesia, { new: true, runValidators: true });
  },
  remove(id) {
    return TipoAnestesia.findByIdAndRemove(id);
  }
};
