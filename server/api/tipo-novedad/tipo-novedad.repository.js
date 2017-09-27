const TipoNovedad = require('./tipo-novedad.model');

module.exports = {
  get() {
    return TipoNovedad.find();
  },
  getById(id) {
    return TipoNovedad.findById(id)
          
          
  },
  add(tipoNovedad) {
    const _tipoNovedad = new TipoNovedad(tipoNovedad);
    return _tipoNovedad.save();
  },
  update(id, tipoNovedad) {
    return TipoNovedad.findByIdAndUpdate(id, tipoNovedad, { new: true, runValidators: true });
  },
  remove(id) {
    return TipoNovedad.findByIdAndRemove(id);
  }
};
