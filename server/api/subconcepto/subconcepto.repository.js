const Subconcepto = require('./subconcepto.model');

module.exports = {
  get() {
    return Subconcepto.find();
  },
  getById(id) {
    return Subconcepto.findById(id)
          .populate('motivo').populate('tipoAdmision')
          
  },
  add(subconcepto) {
    const _subconcepto = new Subconcepto(subconcepto);
    return _subconcepto.save();
  },
  update(id, subconcepto) {
    return Subconcepto.findByIdAndUpdate(id, subconcepto, { new: true, runValidators: true });
  },
  remove(id) {
    return Subconcepto.findByIdAndRemove(id);
  }
};
