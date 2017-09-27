const ZonaHoraria = require('./zona-horaria.model');

module.exports = {
  get() {
    return ZonaHoraria.find();
  },
  getById(id) {
    return ZonaHoraria.findById(id)
          .populate('sucursal')
          
  },
  add(zonaHoraria) {
    const _zonaHoraria = new ZonaHoraria(zonaHoraria);
    return _zonaHoraria.save();
  },
  update(id, zonaHoraria) {
    return ZonaHoraria.findByIdAndUpdate(id, zonaHoraria, { new: true, runValidators: true });
  },
  remove(id) {
    return ZonaHoraria.findByIdAndRemove(id);
  }
};
