const TrazabilidadAdmisionListaEsperaHistoriaClinica = require('./trazabilidad-admision-lista-espera-historia-clinica.model');

module.exports = {
  get() {
    return TrazabilidadAdmisionListaEsperaHistoriaClinica.find();
  },
  getById(id) {
    return TrazabilidadAdmisionListaEsperaHistoriaClinica.findById(id)
          .populate('trazabilidadAdmision')
          
  },
  add(trazabilidadAdmisionListaEsperaHistoriaClinica) {
    const _trazabilidadAdmisionListaEsperaHistoriaClinica = new TrazabilidadAdmisionListaEsperaHistoriaClinica(trazabilidadAdmisionListaEsperaHistoriaClinica);
    return _trazabilidadAdmisionListaEsperaHistoriaClinica.save();
  },
  update(id, trazabilidadAdmisionListaEsperaHistoriaClinica) {
    return TrazabilidadAdmisionListaEsperaHistoriaClinica.findByIdAndUpdate(id, trazabilidadAdmisionListaEsperaHistoriaClinica, { new: true, runValidators: true });
  },
  remove(id) {
    return TrazabilidadAdmisionListaEsperaHistoriaClinica.findByIdAndRemove(id);
  }
};
