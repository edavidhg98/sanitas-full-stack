const Recargo = require('./recargo.model');

module.exports = {
  get() {
    return Recargo.find();
  },
  getById(id) {
    return Recargo.findById(id)
          .populate('prestador')
          
  },
  add(recargo) {
    const _recargo = new Recargo(recargo);
    return _recargo.save();
  },
  update(id, recargo) {
    return Recargo.findByIdAndUpdate(id, recargo, { new: true, runValidators: true });
  },
  remove(id) {
    return Recargo.findByIdAndRemove(id);
  }
};
