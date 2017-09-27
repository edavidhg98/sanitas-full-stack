const TipoCirugia = require('./tipo-cirugia.model');

module.exports = {
  get() {
    return TipoCirugia.find();
  },
  getById(id) {
    return TipoCirugia.findById(id)
          .populate('entidad')
          
  },
  add(tipoCirugia) {
    const _tipoCirugia = new TipoCirugia(tipoCirugia);
    return _tipoCirugia.save();
  },
  update(id, tipoCirugia) {
    return TipoCirugia.findByIdAndUpdate(id, tipoCirugia, { new: true, runValidators: true });
  },
  remove(id) {
    return TipoCirugia.findByIdAndRemove(id);
  }
};
