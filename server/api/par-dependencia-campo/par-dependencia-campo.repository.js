const ParDependenciaCampo = require('./par-dependencia-campo.model');

module.exports = {
  get() {
    return ParDependenciaCampo.find();
  },
  getById(id) {
    return ParDependenciaCampo.findById(id)
          
          
  },
  add(parDependenciaCampo) {
    const _parDependenciaCampo = new ParDependenciaCampo(parDependenciaCampo);
    return _parDependenciaCampo.save();
  },
  update(id, parDependenciaCampo) {
    return ParDependenciaCampo.findByIdAndUpdate(id, parDependenciaCampo, { new: true, runValidators: true });
  },
  remove(id) {
    return ParDependenciaCampo.findByIdAndRemove(id);
  }
};
