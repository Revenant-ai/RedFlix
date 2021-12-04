const Theater_Admin = require("../models/Theater_Admin");
const Client = require("../models/Client");

exports.user_reg = async (email, password) => {
  const user = await Theater_Admin.create({
    email,
    password,
  });
  return user;
};
exports.user_exist = async (email) => {
  const user = await Theater_Admin.findOne({
    email,
  }).select("+password");
  return user;
};

exports.Client_reg = async (email, profile, cb) => {
  Client.findOrCreate({ name: profile.displayName,email:email }, function (err, user) {
    return cb(err, user);
  });
};
