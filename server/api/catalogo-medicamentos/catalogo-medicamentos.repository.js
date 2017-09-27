const CatalogoMedicamentos = require('./catalogo-medicamentos.model');

module.exports = {
  get() {
    return CatalogoMedicamentos.find();
  },
  getById(id) {
    return CatalogoMedicamentos.findById(id)
          
          
  },
  add(catalogoMedicamentos) {
    const _catalogoMedicamentos = new CatalogoMedicamentos(catalogoMedicamentos);
    return _catalogoMedicamentos.save();
  },
  update(id, catalogoMedicamentos) {
    return CatalogoMedicamentos.findByIdAndUpdate(id, catalogoMedicamentos, { new: true, runValidators: true });
  },
  remove(id) {
    return CatalogoMedicamentos.findByIdAndRemove(id);
  }
};
