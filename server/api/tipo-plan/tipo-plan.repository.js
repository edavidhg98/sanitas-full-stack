const TipoPlan = require('./tipo-plan.model');

module.exports = {
  get() {
    return TipoPlan.find();
  },
  getById(id) {
    return TipoPlan.findById(id)
          .populate('entidad')
          .populate('camaPlans').populate('tiposDocumentoEntidads')
  },
  add(tipoPlan) {
    const _tipoPlan = new TipoPlan(tipoPlan);
    return _tipoPlan.save();
  },
  update(id, tipoPlan) {
    return TipoPlan.findByIdAndUpdate(id, tipoPlan, { new: true, runValidators: true });
  },
  remove(id) {
    return TipoPlan.findByIdAndRemove(id);
  }
};
