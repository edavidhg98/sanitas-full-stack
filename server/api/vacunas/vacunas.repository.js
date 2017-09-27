const Vacunas = require('./vacunas.model');

module.exports = {
  get() {
    return Vacunas.find();
  },
  getById(id) {
    return Vacunas.findById(id)
          
          .populate('tarifaVacunacions')
  },
  add(vacunas) {
    const _vacunas = new Vacunas(vacunas);
    return _vacunas.save();
  },
  update(id, vacunas) {
    return Vacunas.findByIdAndUpdate(id, vacunas, { new: true, runValidators: true });
  },
  remove(id) {
    return Vacunas.findByIdAndRemove(id);
  }
};
