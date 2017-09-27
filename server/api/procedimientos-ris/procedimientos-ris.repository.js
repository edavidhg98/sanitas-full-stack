const ProcedimientosRis = require('./procedimientos-ris.model');

module.exports = {
  get() {
    return ProcedimientosRis.find();
  },
  getById(id) {
    return ProcedimientosRis.findById(id)
          .populate('procedimiento')
          
  },
  add(procedimientosRis) {
    const _procedimientosRis = new ProcedimientosRis(procedimientosRis);
    return _procedimientosRis.save();
  },
  update(id, procedimientosRis) {
    return ProcedimientosRis.findByIdAndUpdate(id, procedimientosRis, { new: true, runValidators: true });
  },
  remove(id) {
    return ProcedimientosRis.findByIdAndRemove(id);
  }
};
