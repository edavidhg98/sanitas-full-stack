const ZonaHorariaVerano = require('./zona-horaria-verano.model');

module.exports = {
  get() {
    return ZonaHorariaVerano.find();
  },
  getById(id) {
    return ZonaHorariaVerano.findById(id)
          .populate('sucursal')
          
  },
  add(zonaHorariaVerano) {
    const _zonaHorariaVerano = new ZonaHorariaVerano(zonaHorariaVerano);
    return _zonaHorariaVerano.save();
  },
  update(id, zonaHorariaVerano) {
    return ZonaHorariaVerano.findByIdAndUpdate(id, zonaHorariaVerano, { new: true, runValidators: true });
  },
  remove(id) {
    return ZonaHorariaVerano.findByIdAndRemove(id);
  }
};
