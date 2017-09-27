const AutorizacionBh = require('./autorizacion-bh.model');

module.exports = {
  get() {
    return AutorizacionBh.find();
  },
  getById(id) {
    return AutorizacionBh.findById(id)
          .populate('procedimiento')
          
  },
  add(autorizacionBh) {
    const _autorizacionBh = new AutorizacionBh(autorizacionBh);
    return _autorizacionBh.save();
  },
  update(id, autorizacionBh) {
    return AutorizacionBh.findByIdAndUpdate(id, autorizacionBh, { new: true, runValidators: true });
  },
  remove(id) {
    return AutorizacionBh.findByIdAndRemove(id);
  }
};
