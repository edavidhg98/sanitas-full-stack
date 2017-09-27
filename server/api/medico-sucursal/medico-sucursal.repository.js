const MedicoSucursal = require('./medico-sucursal.model');

module.exports = {
  get() {
    return MedicoSucursal.find();
  },
  getById(id) {
    return MedicoSucursal.findById(id)
          
          
  },
  add(medicoSucursal) {
    const _medicoSucursal = new MedicoSucursal(medicoSucursal);
    return _medicoSucursal.save();
  },
  update(id, medicoSucursal) {
    return MedicoSucursal.findByIdAndUpdate(id, medicoSucursal, { new: true, runValidators: true });
  },
  remove(id) {
    return MedicoSucursal.findByIdAndRemove(id);
  }
};
