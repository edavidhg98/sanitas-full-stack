const GrupoEtareo = require('./grupo-etareo.model');

module.exports = {
  get() {
    return GrupoEtareo.find();
  },
  getById(id) {
    return GrupoEtareo.findById(id)
          .populate('entidad').populate('sucursal')
          
  },
  add(grupoEtareo) {
    const _grupoEtareo = new GrupoEtareo(grupoEtareo);
    return _grupoEtareo.save();
  },
  update(id, grupoEtareo) {
    return GrupoEtareo.findByIdAndUpdate(id, grupoEtareo, { new: true, runValidators: true });
  },
  remove(id) {
    return GrupoEtareo.findByIdAndRemove(id);
  }
};
