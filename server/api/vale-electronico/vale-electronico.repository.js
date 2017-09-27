const ValeElectronico = require('./vale-electronico.model');

module.exports = {
  get() {
    return ValeElectronico.find();
  },
  getById(id) {
    return ValeElectronico.findById(id)
          
          
  },
  add(valeElectronico) {
    const _valeElectronico = new ValeElectronico(valeElectronico);
    return _valeElectronico.save();
  },
  update(id, valeElectronico) {
    return ValeElectronico.findByIdAndUpdate(id, valeElectronico, { new: true, runValidators: true });
  },
  remove(id) {
    return ValeElectronico.findByIdAndRemove(id);
  }
};
