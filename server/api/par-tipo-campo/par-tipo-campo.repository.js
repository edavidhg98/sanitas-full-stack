const ParTipoCampo = require('./par-tipo-campo.model');

module.exports = {
  get() {
    return ParTipoCampo.find();
  },
  getById(id) {
    return ParTipoCampo.findById(id)
          
          
  },
  add(parTipoCampo) {
    const _parTipoCampo = new ParTipoCampo(parTipoCampo);
    return _parTipoCampo.save();
  },
  update(id, parTipoCampo) {
    return ParTipoCampo.findByIdAndUpdate(id, parTipoCampo, { new: true, runValidators: true });
  },
  remove(id) {
    return ParTipoCampo.findByIdAndRemove(id);
  }
};
