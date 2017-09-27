const CodigoPostal = require('./codigo-postal.model');

module.exports = {
  get() {
    return CodigoPostal.find();
  },
  getById(id) {
    return CodigoPostal.findById(id)
          
          
  },
  add(codigoPostal) {
    const _codigoPostal = new CodigoPostal(codigoPostal);
    return _codigoPostal.save();
  },
  update(id, codigoPostal) {
    return CodigoPostal.findByIdAndUpdate(id, codigoPostal, { new: true, runValidators: true });
  },
  remove(id) {
    return CodigoPostal.findByIdAndRemove(id);
  }
};
