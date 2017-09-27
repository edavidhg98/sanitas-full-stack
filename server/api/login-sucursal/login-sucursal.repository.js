const LoginSucursal = require('./login-sucursal.model');

module.exports = {
  get() {
    return LoginSucursal.find();
  },
  getById(id) {
    return LoginSucursal.findById(id)
          .populate('sucursal').populate('login')
          
  },
  add(loginSucursal) {
    const _loginSucursal = new LoginSucursal(loginSucursal);
    return _loginSucursal.save();
  },
  update(id, loginSucursal) {
    return LoginSucursal.findByIdAndUpdate(id, loginSucursal, { new: true, runValidators: true });
  },
  remove(id) {
    return LoginSucursal.findByIdAndRemove(id);
  }
};
