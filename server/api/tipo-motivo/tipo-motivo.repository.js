const TipoMotivo = require('./tipo-motivo.model');

module.exports = {
  get() {
    return TipoMotivo.find();
  },
  getById(id) {
    return TipoMotivo.findById(id)
          
          .populate('motivos')
  },
  add(tipoMotivo) {
    const _tipoMotivo = new TipoMotivo(tipoMotivo);
    return _tipoMotivo.save();
  },
  update(id, tipoMotivo) {
    return TipoMotivo.findByIdAndUpdate(id, tipoMotivo, { new: true, runValidators: true });
  },
  remove(id) {
    return TipoMotivo.findByIdAndRemove(id);
  }
};
