const Religion = require('./religion.model');

module.exports = {
  get() {
    return Religion.find();
  },
  getById(id) {
    return Religion.findById(id)
          
          
  },
  add(religion) {
    const _religion = new Religion(religion);
    return _religion.save();
  },
  update(id, religion) {
    return Religion.findByIdAndUpdate(id, religion, { new: true, runValidators: true });
  },
  remove(id) {
    return Religion.findByIdAndRemove(id);
  }
};
