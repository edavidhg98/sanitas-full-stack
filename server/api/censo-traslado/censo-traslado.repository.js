const CensoTraslado = require('./censo-traslado.model');

module.exports = {
  get() {
    return CensoTraslado.find();
  },
  getById(id) {
    return CensoTraslado.findById(id)
          .populate('cama').populate('cama').populate('motivo')
          
  },
  add(censoTraslado) {
    const _censoTraslado = new CensoTraslado(censoTraslado);
    return _censoTraslado.save();
  },
  update(id, censoTraslado) {
    return CensoTraslado.findByIdAndUpdate(id, censoTraslado, { new: true, runValidators: true });
  },
  remove(id) {
    return CensoTraslado.findByIdAndRemove(id);
  }
};
