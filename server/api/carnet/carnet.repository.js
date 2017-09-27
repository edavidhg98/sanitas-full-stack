const Carnet = require('./carnet.model');

module.exports = {
  get() {
    return Carnet.find();
  },
  getById(id) {
    return Carnet.findById(id)
          
          
  },
  add(carnet) {
    const _carnet = new Carnet(carnet);
    return _carnet.save();
  },
  update(id, carnet) {
    return Carnet.findByIdAndUpdate(id, carnet, { new: true, runValidators: true });
  },
  remove(id) {
    return Carnet.findByIdAndRemove(id);
  }
};
