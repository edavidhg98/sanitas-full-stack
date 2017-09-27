const CensoHistorico = require('./censo-historico.model');

module.exports = {
  get() {
    return CensoHistorico.find();
  },
  getById(id) {
    return CensoHistorico.findById(id)
          .populate('cama').populate('sucursal')
          
  },
  add(censoHistorico) {
    const _censoHistorico = new CensoHistorico(censoHistorico);
    return _censoHistorico.save();
  },
  update(id, censoHistorico) {
    return CensoHistorico.findByIdAndUpdate(id, censoHistorico, { new: true, runValidators: true });
  },
  remove(id) {
    return CensoHistorico.findByIdAndRemove(id);
  }
};
