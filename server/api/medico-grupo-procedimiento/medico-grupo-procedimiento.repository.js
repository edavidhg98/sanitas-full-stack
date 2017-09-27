const MedicoGrupoProcedimiento = require('./medico-grupo-procedimiento.model');

module.exports = {
  get() {
    return MedicoGrupoProcedimiento.find();
  },
  getById(id) {
    return MedicoGrupoProcedimiento.findById(id)
          .populate('subGrupoProcedimiento').populate('sucursal')
          
  },
  add(medicoGrupoProcedimiento) {
    const _medicoGrupoProcedimiento = new MedicoGrupoProcedimiento(medicoGrupoProcedimiento);
    return _medicoGrupoProcedimiento.save();
  },
  update(id, medicoGrupoProcedimiento) {
    return MedicoGrupoProcedimiento.findByIdAndUpdate(id, medicoGrupoProcedimiento, { new: true, runValidators: true });
  },
  remove(id) {
    return MedicoGrupoProcedimiento.findByIdAndRemove(id);
  }
};
