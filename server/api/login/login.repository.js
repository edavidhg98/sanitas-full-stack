const Login = require('./login.model');

module.exports = {
  get() {
    return Login.find();
  },
  getById(id) {
    return Login.findById(id)
          .populate('ciudad').populate('sucursal')
          .populate('loginSucursals')
  },
  add(login) {
    const _login = new Login(login);
    return _login.save();
  },
  update(id, login) {
    return Login.findByIdAndUpdate(id, login, { new: true, runValidators: true });
  },
  remove(id) {
    return Login.findByIdAndRemove(id);
  }
};
