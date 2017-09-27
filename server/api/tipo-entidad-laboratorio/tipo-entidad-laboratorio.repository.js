const TipoEntidadLaboratorio = require('./tipo-entidad-laboratorio.model');

module.exports = {
  get() {
    return TipoEntidadLaboratorio.find();
  },
  getById(id) {
    return TipoEntidadLaboratorio.findById(id)
          
          
  },
  add(tipoEntidadLaboratorio) {
    const _tipoEntidadLaboratorio = new TipoEntidadLaboratorio(tipoEntidadLaboratorio);
    return _tipoEntidadLaboratorio.save();
  },
  update(id, tipoEntidadLaboratorio) {
    return TipoEntidadLaboratorio.findByIdAndUpdate(id, tipoEntidadLaboratorio, { new: true, runValidators: true });
  },
  remove(id) {
    return TipoEntidadLaboratorio.findByIdAndRemove(id);
  }
};
