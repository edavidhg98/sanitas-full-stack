const ParAliascolumnas = require('./par-aliascolumnas.model');

module.exports = {
  get() {
    return ParAliascolumnas.find();
  },
  getById(id) {
    return ParAliascolumnas.findById(id)
          
          
  },
  add(parAliascolumnas) {
    const _parAliascolumnas = new ParAliascolumnas(parAliascolumnas);
    return _parAliascolumnas.save();
  },
  update(id, parAliascolumnas) {
    return ParAliascolumnas.findByIdAndUpdate(id, parAliascolumnas, { new: true, runValidators: true });
  },
  remove(id) {
    return ParAliascolumnas.findByIdAndRemove(id);
  }
};
