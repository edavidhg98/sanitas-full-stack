const Planes = require('./planes.model');

module.exports = {
  get() {
    return Planes.find();
  },
  getById(id) {
    return Planes.findById(id)
          .populate('entidad')
          
  },
  add(planes) {
    const _planes = new Planes(planes);
    return _planes.save();
  },
  update(id, planes) {
    return Planes.findByIdAndUpdate(id, planes, { new: true, runValidators: true });
  },
  remove(id) {
    return Planes.findByIdAndRemove(id);
  }
};
