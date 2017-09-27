const ParFormatoCampo = require('./par-formato-campo.model');

module.exports = {
  get() {
    return ParFormatoCampo.find();
  },
  getById(id) {
    return ParFormatoCampo.findById(id)
          
          
  },
  add(parFormatoCampo) {
    const _parFormatoCampo = new ParFormatoCampo(parFormatoCampo);
    return _parFormatoCampo.save();
  },
  update(id, parFormatoCampo) {
    return ParFormatoCampo.findByIdAndUpdate(id, parFormatoCampo, { new: true, runValidators: true });
  },
  remove(id) {
    return ParFormatoCampo.findByIdAndRemove(id);
  }
};
