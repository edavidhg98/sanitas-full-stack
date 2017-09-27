const RecargoAutomatico = require('./recargo-automatico.model');

module.exports = {
  get() {
    return RecargoAutomatico.find();
  },
  getById(id) {
    return RecargoAutomatico.findById(id)
          .populate('entidad')
          
  },
  add(recargoAutomatico) {
    const _recargoAutomatico = new RecargoAutomatico(recargoAutomatico);
    return _recargoAutomatico.save();
  },
  update(id, recargoAutomatico) {
    return RecargoAutomatico.findByIdAndUpdate(id, recargoAutomatico, { new: true, runValidators: true });
  },
  remove(id) {
    return RecargoAutomatico.findByIdAndRemove(id);
  }
};
