const { compare, genSalt, hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const { UserRepository } = require("../repositories");

const UserService = {};

UserService.signIn = async (body) => {
  const userExists = await UserRepository.getUserByEmail(body.email);

  if (!userExists) {
    const error = new Error();
    error.status = 401;
    error.message = "Invalid email or password";
    throw error;
  }

  const validPassword = await compare(body.password, userExists.password);

  if (!validPassword) {
    const error = new Error();
    error.status = 401;
    error.message = "Invalid email or password";
    throw error;
  }

  return {
    user: {
      id: userExists.id,
      firstName: userExists.firstname,
      lastName: userExists.lastname,
      email: userExists.email,
    },
    token: sign({ userExists }, "my-secret", { expiresIn: "1h" }),
  };
};

UserService.signUp = async (body) => {
  const userExists = await UserRepository.getUserByEmail(body.email);

  if (userExists) {
    const error = new Error();
    error.status = 409;
    error.message = "Email is already associated with an account";
    throw error;
  }

  const salt = await genSalt(10);
  const hashPass = await hash(body.password, salt);

  body.password = hashPass;

  const user = await UserRepository.createUser(body);

  return {
    user: {
      id: user.id,
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
    },
    token: sign({ user }, "my-secret", { expiresIn: "1h" }),
  };
};

module.exports = UserService;
