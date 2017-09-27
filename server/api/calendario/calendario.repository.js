const Calendario = require('./calendario.model');

module.exports = {
  get() {
    return Calendario.find();
  },
  getById(id) {
    return Calendario.findById(id)
          
          
  },
  add(calendario) {
    const _calendario = new Calendario(calendario);
    return _calendario.save();
  },
  update(id, calendario) {
    return Calendario.findByIdAndUpdate(id, calendario, { new: true, runValidators: true });
  },
  remove(id) {
    return Calendario.findByIdAndRemove(id);
  }
};
