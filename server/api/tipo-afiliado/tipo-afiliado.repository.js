const TipoAfiliado = require('./tipo-afiliado.model');

module.exports = {
  get() {
    return TipoAfiliado.find();
  },
  getById(id) {
    return TipoAfiliado.findById(id)
          
          
  },
  add(tipoAfiliado) {
    const _tipoAfiliado = new TipoAfiliado(tipoAfiliado);
    return _tipoAfiliado.save();
  },
  update(id, tipoAfiliado) {
    return TipoAfiliado.findByIdAndUpdate(id, tipoAfiliado, { new: true, runValidators: true });
  },
  remove(id) {
    return TipoAfiliado.findByIdAndRemove(id);
  }
};
