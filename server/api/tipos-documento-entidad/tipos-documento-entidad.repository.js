const TiposDocumentoEntidad = require('./tipos-documento-entidad.model');

module.exports = {
  get() {
    return TiposDocumentoEntidad.find();
  },
  getById(id) {
    return TiposDocumentoEntidad.findById(id)
          .populate('entidad').populate('tipoPlan')
          
  },
  add(tiposDocumentoEntidad) {
    const _tiposDocumentoEntidad = new TiposDocumentoEntidad(tiposDocumentoEntidad);
    return _tiposDocumentoEntidad.save();
  },
  update(id, tiposDocumentoEntidad) {
    return TiposDocumentoEntidad.findByIdAndUpdate(id, tiposDocumentoEntidad, { new: true, runValidators: true });
  },
  remove(id) {
    return TiposDocumentoEntidad.findByIdAndRemove(id);
  }
};
