const CodigoDia = require('./codigo-dia.model');

module.exports = {
  get() {
    return CodigoDia.find();
  },
  getById(id) {
    return CodigoDia.findById(id)
          
          
  },
  add(codigoDia) {
    const _codigoDia = new CodigoDia(codigoDia);
    return _codigoDia.save();
  },
  update(id, codigoDia) {
    return CodigoDia.findByIdAndUpdate(id, codigoDia, { new: true, runValidators: true });
  },
  remove(id) {
    return CodigoDia.findByIdAndRemove(id);
  }
};
