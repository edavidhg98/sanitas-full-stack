const HomologacionServiciosAgfa = require('./homologacion-servicios-agfa.model');

module.exports = {
  get() {
    return HomologacionServiciosAgfa.find();
  },
  getById(id) {
    return HomologacionServiciosAgfa.findById(id)
          .populate('sucursal').populate('entidad')
          
  },
  add(homologacionServiciosAgfa) {
    const _homologacionServiciosAgfa = new HomologacionServiciosAgfa(homologacionServiciosAgfa);
    return _homologacionServiciosAgfa.save();
  },
  update(id, homologacionServiciosAgfa) {
    return HomologacionServiciosAgfa.findByIdAndUpdate(id, homologacionServiciosAgfa, { new: true, runValidators: true });
  },
  remove(id) {
    return HomologacionServiciosAgfa.findByIdAndRemove(id);
  }
};
