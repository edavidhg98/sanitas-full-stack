const PypProgramas = require('./pyp-programas.model');

module.exports = {
  get() {
    return PypProgramas.find();
  },
  getById(id) {
    return PypProgramas.findById(id)
          
          .populate('pypProcedimientoProgramas')
  },
  add(pypProgramas) {
    const _pypProgramas = new PypProgramas(pypProgramas);
    return _pypProgramas.save();
  },
  update(id, pypProgramas) {
    return PypProgramas.findByIdAndUpdate(id, pypProgramas, { new: true, runValidators: true });
  },
  remove(id) {
    return PypProgramas.findByIdAndRemove(id);
  }
};
