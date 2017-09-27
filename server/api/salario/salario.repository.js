const Salario = require('./salario.model');

module.exports = {
  get() {
    return Salario.find();
  },
  getById(id) {
    return Salario.findById(id)
          
          
  },
  add(salario) {
    const _salario = new Salario(salario);
    return _salario.save();
  },
  update(id, salario) {
    return Salario.findByIdAndUpdate(id, salario, { new: true, runValidators: true });
  },
  remove(id) {
    return Salario.findByIdAndRemove(id);
  }
};
