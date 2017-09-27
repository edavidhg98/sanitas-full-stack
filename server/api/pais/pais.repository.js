const Pais = require('./pais.model');

module.exports = {
  get() {
    return Pais.find();
  },
  getById(id) {
    return Pais.findById(id)
          
          
  },
  add(pais) {
    const _pais = new Pais(pais);
    return _pais.save();
  },
  update(id, pais) {
    return Pais.findByIdAndUpdate(id, pais, { new: true, runValidators: true });
  },
  remove(id) {
    return Pais.findByIdAndRemove(id);
  }
};
