const user = require("../models/User");
module.exports = {
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  },
  async index(req, res) {
    const user = await User.findOne({ email: req.params.email });
    return res.json(user);
  }
};