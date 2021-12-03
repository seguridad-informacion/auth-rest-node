const { UserModel } = require("../models");

const UserRepository = {};

UserRepository.createUser = (user) => UserModel.create(user);

UserRepository.getUserByEmail = (email) => UserModel.findOne({ email });

module.exports = UserRepository;
