const EncabezadoCatalogo = require('./encabezado-catalogo.model');

module.exports = {
  get() {
    return EncabezadoCatalogo.find();
  },
  getById(id) {
    return EncabezadoCatalogo.findById(id)
          
          .populate('sucursalEntidads')
  },
  add(encabezadoCatalogo) {
    const _encabezadoCatalogo = new EncabezadoCatalogo(encabezadoCatalogo);
    return _encabezadoCatalogo.save();
  },
  update(id, encabezadoCatalogo) {
    return EncabezadoCatalogo.findByIdAndUpdate(id, encabezadoCatalogo, { new: true, runValidators: true });
  },
  remove(id) {
    return EncabezadoCatalogo.findByIdAndRemove(id);
  }
};
