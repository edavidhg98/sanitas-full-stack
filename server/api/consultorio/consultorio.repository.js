const Consultorio = require('./consultorio.model');

module.exports = {
  get() {
    return Consultorio.find();
  },
  getById(id) {
    return Consultorio.findById(id)
          .populate('sucursal')
          .populate('trazabilidadAdmisions').populate('triages')
  },
  add(consultorio) {
    const _consultorio = new Consultorio(consultorio);
    return _consultorio.save();
  },
  update(id, consultorio) {
    return Consultorio.findByIdAndUpdate(id, consultorio, { new: true, runValidators: true });
  },
  remove(id) {
    return Consultorio.findByIdAndRemove(id);
  }
};
