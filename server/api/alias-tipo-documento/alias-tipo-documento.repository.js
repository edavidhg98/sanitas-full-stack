const AliasTipoDocumento = require('./alias-tipo-documento.model');

module.exports = {
  get() {
    return AliasTipoDocumento.find();
  },
  getById(id) {
    return AliasTipoDocumento.findById(id)
          
          
  },
  add(aliasTipoDocumento) {
    const _aliasTipoDocumento = new AliasTipoDocumento(aliasTipoDocumento);
    return _aliasTipoDocumento.save();
  },
  update(id, aliasTipoDocumento) {
    return AliasTipoDocumento.findByIdAndUpdate(id, aliasTipoDocumento, { new: true, runValidators: true });
  },
  remove(id) {
    return AliasTipoDocumento.findByIdAndRemove(id);
  }
};
