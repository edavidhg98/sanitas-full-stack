const ConsumoSoatOtraIps = require('./consumo-soat-otra-ips.model');

module.exports = {
  get() {
    return ConsumoSoatOtraIps.find();
  },
  getById(id) {
    return ConsumoSoatOtraIps.findById(id)
          
          
  },
  add(consumoSoatOtraIps) {
    const _consumoSoatOtraIps = new ConsumoSoatOtraIps(consumoSoatOtraIps);
    return _consumoSoatOtraIps.save();
  },
  update(id, consumoSoatOtraIps) {
    return ConsumoSoatOtraIps.findByIdAndUpdate(id, consumoSoatOtraIps, { new: true, runValidators: true });
  },
  remove(id) {
    return ConsumoSoatOtraIps.findByIdAndRemove(id);
  }
};
