const FotoEstadoCama = require('./foto-estado-cama.model');

module.exports = {
  get() {
    return FotoEstadoCama.find();
  },
  getById(id) {
    return FotoEstadoCama.findById(id)
          
          .populate('camas')
  },
  add(fotoEstadoCama) {
    const _fotoEstadoCama = new FotoEstadoCama(fotoEstadoCama);
    return _fotoEstadoCama.save();
  },
  update(id, fotoEstadoCama) {
    return FotoEstadoCama.findByIdAndUpdate(id, fotoEstadoCama, { new: true, runValidators: true });
  },
  remove(id) {
    return FotoEstadoCama.findByIdAndRemove(id);
  }
};
