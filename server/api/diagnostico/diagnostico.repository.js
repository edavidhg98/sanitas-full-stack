const Diagnostico = require('./diagnostico.model');

module.exports = {
  get() {
    return Diagnostico.find();
  },
  getById(id) {
    return Diagnostico.findById(id)
          
          
  },
  add(diagnostico) {
    const _diagnostico = new Diagnostico(diagnostico);
    return _diagnostico.save();
  },
  update(id, diagnostico) {
    return Diagnostico.findByIdAndUpdate(id, diagnostico, { new: true, runValidators: true });
  },
  remove(id) {
    return Diagnostico.findByIdAndRemove(id);
  }
};
