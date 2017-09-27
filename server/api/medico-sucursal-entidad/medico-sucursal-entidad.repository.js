const MedicoSucursalEntidad = require('./medico-sucursal-entidad.model');

module.exports = {
  get() {
    return MedicoSucursalEntidad.find();
  },
  getById(id) {
    return MedicoSucursalEntidad.findById(id)
          
          
  },
  add(medicoSucursalEntidad) {
    const _medicoSucursalEntidad = new MedicoSucursalEntidad(medicoSucursalEntidad);
    return _medicoSucursalEntidad.save();
  },
  update(id, medicoSucursalEntidad) {
    return MedicoSucursalEntidad.findByIdAndUpdate(id, medicoSucursalEntidad, { new: true, runValidators: true });
  },
  remove(id) {
    return MedicoSucursalEntidad.findByIdAndRemove(id);
  }
};
