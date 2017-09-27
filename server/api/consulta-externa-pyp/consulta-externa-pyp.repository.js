const ConsultaExternaPyp = require('./consulta-externa-pyp.model');

module.exports = {
  get() {
    return ConsultaExternaPyp.find();
  },
  getById(id) {
    return ConsultaExternaPyp.findById(id)
          .populate('procedimiento')
          
  },
  add(consultaExternaPyp) {
    const _consultaExternaPyp = new ConsultaExternaPyp(consultaExternaPyp);
    return _consultaExternaPyp.save();
  },
  update(id, consultaExternaPyp) {
    return ConsultaExternaPyp.findByIdAndUpdate(id, consultaExternaPyp, { new: true, runValidators: true });
  },
  remove(id) {
    return ConsultaExternaPyp.findByIdAndRemove(id);
  }
};
