const GrupoProcedimiento = require('./grupo-procedimiento.model');

module.exports = {
  get() {
    return GrupoProcedimiento.find();
  },
  getById(id) {
    return GrupoProcedimiento.findById(id)
          
          .populate('subGrupoProcedimientos')
  },
  add(grupoProcedimiento) {
    const _grupoProcedimiento = new GrupoProcedimiento(grupoProcedimiento);
    return _grupoProcedimiento.save();
  },
  update(id, grupoProcedimiento) {
    return GrupoProcedimiento.findByIdAndUpdate(id, grupoProcedimiento, { new: true, runValidators: true });
  },
  remove(id) {
    return GrupoProcedimiento.findByIdAndRemove(id);
  }
};
