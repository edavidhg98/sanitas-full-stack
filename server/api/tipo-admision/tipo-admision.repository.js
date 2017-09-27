const TipoAdmision = require('./tipo-admision.model');

module.exports = {
  get() {
    return TipoAdmision.find();
  },
  getById(id) {
    return TipoAdmision.findById(id)
          
          .populate('excepcionRegargos').populate('nivelCargos').populate('procedimientoConvenioCapitados').populate('trazabilidadAdmisions').populate('subconceptos')
  },
  add(tipoAdmision) {
    const _tipoAdmision = new TipoAdmision(tipoAdmision);
    return _tipoAdmision.save();
  },
  update(id, tipoAdmision) {
    return TipoAdmision.findByIdAndUpdate(id, tipoAdmision, { new: true, runValidators: true });
  },
  remove(id) {
    return TipoAdmision.findByIdAndRemove(id);
  }
};
