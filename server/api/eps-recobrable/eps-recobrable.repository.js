const EpsRecobrable = require('./eps-recobrable.model');

module.exports = {
  get() {
    return EpsRecobrable.find();
  },
  getById(id) {
    return EpsRecobrable.findById(id)
          .populate('entidad')
          
  },
  add(epsRecobrable) {
    const _epsRecobrable = new EpsRecobrable(epsRecobrable);
    return _epsRecobrable.save();
  },
  update(id, epsRecobrable) {
    return EpsRecobrable.findByIdAndUpdate(id, epsRecobrable, { new: true, runValidators: true });
  },
  remove(id) {
    return EpsRecobrable.findByIdAndRemove(id);
  }
};
