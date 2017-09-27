const Sustitutos = require('./sustitutos.model');

module.exports = {
  get() {
    return Sustitutos.find();
  },
  getById(id) {
    return Sustitutos.findById(id)
          .populate('prestador').populate('producto').populate('producto')
          
  },
  add(sustitutos) {
    const _sustitutos = new Sustitutos(sustitutos);
    return _sustitutos.save();
  },
  update(id, sustitutos) {
    return Sustitutos.findByIdAndUpdate(id, sustitutos, { new: true, runValidators: true });
  },
  remove(id) {
    return Sustitutos.findByIdAndRemove(id);
  }
};
