const RecalculoAutomatico = require('./recalculo-automatico.model');

module.exports = {
  get() {
    return RecalculoAutomatico.find();
  },
  getById(id) {
    return RecalculoAutomatico.findById(id)
          .populate('sucursal').populate('entidad')
          
  },
  add(recalculoAutomatico) {
    const _recalculoAutomatico = new RecalculoAutomatico(recalculoAutomatico);
    return _recalculoAutomatico.save();
  },
  update(id, recalculoAutomatico) {
    return RecalculoAutomatico.findByIdAndUpdate(id, recalculoAutomatico, { new: true, runValidators: true });
  },
  remove(id) {
    return RecalculoAutomatico.findByIdAndRemove(id);
  }
};
