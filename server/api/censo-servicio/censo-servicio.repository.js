const CensoServicio = require('./censo-servicio.model');

module.exports = {
  get() {
    return CensoServicio.find();
  },
  getById(id) {
    return CensoServicio.findById(id)
          .populate('sucursal')
          
  },
  add(censoServicio) {
    const _censoServicio = new CensoServicio(censoServicio);
    return _censoServicio.save();
  },
  update(id, censoServicio) {
    return CensoServicio.findByIdAndUpdate(id, censoServicio, { new: true, runValidators: true });
  },
  remove(id) {
    return CensoServicio.findByIdAndRemove(id);
  }
};
