const ParOrigenInformacion = require('./par-origen-informacion.model');

module.exports = {
  get() {
    return ParOrigenInformacion.find();
  },
  getById(id) {
    return ParOrigenInformacion.findById(id)
          
          
  },
  add(parOrigenInformacion) {
    const _parOrigenInformacion = new ParOrigenInformacion(parOrigenInformacion);
    return _parOrigenInformacion.save();
  },
  update(id, parOrigenInformacion) {
    return ParOrigenInformacion.findByIdAndUpdate(id, parOrigenInformacion, { new: true, runValidators: true });
  },
  remove(id) {
    return ParOrigenInformacion.findByIdAndRemove(id);
  }
};
