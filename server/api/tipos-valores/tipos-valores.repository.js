const TiposValores = require('./tipos-valores.model');

module.exports = {
  get() {
    return TiposValores.find();
  },
  getById(id) {
    return TiposValores.findById(id)
          
          
  },
  add(tiposValores) {
    const _tiposValores = new TiposValores(tiposValores);
    return _tiposValores.save();
  },
  update(id, tiposValores) {
    return TiposValores.findByIdAndUpdate(id, tiposValores, { new: true, runValidators: true });
  },
  remove(id) {
    return TiposValores.findByIdAndRemove(id);
  }
};
