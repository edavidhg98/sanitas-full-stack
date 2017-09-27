const Prefijo = require('./prefijo.model');

module.exports = {
  get() {
    return Prefijo.find();
  },
  getById(id) {
    return Prefijo.findById(id)
          
          
  },
  add(prefijo) {
    const _prefijo = new Prefijo(prefijo);
    return _prefijo.save();
  },
  update(id, prefijo) {
    return Prefijo.findByIdAndUpdate(id, prefijo, { new: true, runValidators: true });
  },
  remove(id) {
    return Prefijo.findByIdAndRemove(id);
  }
};
