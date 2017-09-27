const TipoCama = require('./tipo-cama.model');

module.exports = {
  get() {
    return TipoCama.find();
  },
  getById(id) {
    return TipoCama.findById(id)
          
          .populate('camas')
  },
  add(tipoCama) {
    const _tipoCama = new TipoCama(tipoCama);
    return _tipoCama.save();
  },
  update(id, tipoCama) {
    return TipoCama.findByIdAndUpdate(id, tipoCama, { new: true, runValidators: true });
  },
  remove(id) {
    return TipoCama.findByIdAndRemove(id);
  }
};
