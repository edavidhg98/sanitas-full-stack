const Triage = require('./triage.model');

module.exports = {
  get() {
    return Triage.find();
  },
  getById(id) {
    return Triage.findById(id)
          .populate('consultorio').populate('entidad').populate('motivo').populate('sucursal')
          
  },
  add(triage) {
    const _triage = new Triage(triage);
    return _triage.save();
  },
  update(id, triage) {
    return Triage.findByIdAndUpdate(id, triage, { new: true, runValidators: true });
  },
  remove(id) {
    return Triage.findByIdAndRemove(id);
  }
};
