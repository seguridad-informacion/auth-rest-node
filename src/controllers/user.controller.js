const { UserService } = require("../services");

const UserContoller = {};

UserContoller.signIn = async (req, res) => {
  try {
    const credentials = await UserService.signIn(req.body);
    return res.status(201).json(credentials);
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Interval server error.";
    return res.status(status).json({
      status,
      message,
    });
  }
};

UserContoller.signUp = async (req, res) => {
  try {
    const credentials = await UserService.signUp(req.body);
    return res.status(201).json(credentials);
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Interval server error.";
    return res.status(status).json({
      status,
      message,
    });
  }
};

module.exports = UserContoller;
