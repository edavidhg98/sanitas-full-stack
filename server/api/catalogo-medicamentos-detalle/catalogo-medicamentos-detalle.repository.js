const CatalogoMedicamentosDetalle = require('./catalogo-medicamentos-detalle.model');

module.exports = {
  get() {
    return CatalogoMedicamentosDetalle.find();
  },
  getById(id) {
    return CatalogoMedicamentosDetalle.findById(id)
          
          
  },
  add(catalogoMedicamentosDetalle) {
    const _catalogoMedicamentosDetalle = new CatalogoMedicamentosDetalle(catalogoMedicamentosDetalle);
    return _catalogoMedicamentosDetalle.save();
  },
  update(id, catalogoMedicamentosDetalle) {
    return CatalogoMedicamentosDetalle.findByIdAndUpdate(id, catalogoMedicamentosDetalle, { new: true, runValidators: true });
  },
  remove(id) {
    return CatalogoMedicamentosDetalle.findByIdAndRemove(id);
  }
};
