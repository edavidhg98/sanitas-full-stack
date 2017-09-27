const ParFormulario = require('./par-formulario.model');

module.exports = {
  get() {
    return ParFormulario.find();
  },
  getById(id) {
    return ParFormulario.findById(id)
          
          
  },
  add(parFormulario) {
    const _parFormulario = new ParFormulario(parFormulario);
    return _parFormulario.save();
  },
  update(id, parFormulario) {
    return ParFormulario.findByIdAndUpdate(id, parFormulario, { new: true, runValidators: true });
  },
  remove(id) {
    return ParFormulario.findByIdAndRemove(id);
  }
};
