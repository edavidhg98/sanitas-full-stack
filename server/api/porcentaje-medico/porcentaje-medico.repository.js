const PorcentajeMedico = require('./porcentaje-medico.model');

module.exports = {
  get() {
    return PorcentajeMedico.find();
  },
  getById(id) {
    return PorcentajeMedico.findById(id)
          
          
  },
  add(porcentajeMedico) {
    const _porcentajeMedico = new PorcentajeMedico(porcentajeMedico);
    return _porcentajeMedico.save();
  },
  update(id, porcentajeMedico) {
    return PorcentajeMedico.findByIdAndUpdate(id, porcentajeMedico, { new: true, runValidators: true });
  },
  remove(id) {
    return PorcentajeMedico.findByIdAndRemove(id);
  }
};
