const Ciudad = require('./ciudad.model');

module.exports = {
  get() {
    return Ciudad.find();
  },
  getById(id) {
    return Ciudad.findById(id)
          
          .populate('localidads').populate('prestadors').populate('sucursals').populate('entidads').populate('logins')
  },
  add(ciudad) {
    const _ciudad = new Ciudad(ciudad);
    return _ciudad.save();
  },
  update(id, ciudad) {
    return Ciudad.findByIdAndUpdate(id, ciudad, { new: true, runValidators: true });
  },
  remove(id) {
    return Ciudad.findByIdAndRemove(id);
  }
};
