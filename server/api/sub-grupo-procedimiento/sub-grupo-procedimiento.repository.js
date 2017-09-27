const SubGrupoProcedimiento = require('./sub-grupo-procedimiento.model');

module.exports = {
  get() {
    return SubGrupoProcedimiento.find();
  },
  getById(id) {
    return SubGrupoProcedimiento.findById(id)
          .populate('grupoProcedimiento')
          .populate('medicoGrupoProcedimientos').populate('procedimientos')
  },
  add(subGrupoProcedimiento) {
    const _subGrupoProcedimiento = new SubGrupoProcedimiento(subGrupoProcedimiento);
    return _subGrupoProcedimiento.save();
  },
  update(id, subGrupoProcedimiento) {
    return SubGrupoProcedimiento.findByIdAndUpdate(id, subGrupoProcedimiento, { new: true, runValidators: true });
  },
  remove(id) {
    return SubGrupoProcedimiento.findByIdAndRemove(id);
  }
};
