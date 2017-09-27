const CamaPlan = require('./cama-plan.model');

module.exports = {
  get() {
    return CamaPlan.find();
  },
  getById(id) {
    return CamaPlan.findById(id)
          .populate('cama').populate('entidad').populate('tipoPlan')
          
  },
  add(camaPlan) {
    const _camaPlan = new CamaPlan(camaPlan);
    return _camaPlan.save();
  },
  update(id, camaPlan) {
    return CamaPlan.findByIdAndUpdate(id, camaPlan, { new: true, runValidators: true });
  },
  remove(id) {
    return CamaPlan.findByIdAndRemove(id);
  }
};
