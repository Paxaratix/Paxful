const User = require("../models/userModel");

const getHomePage = (req, res) => {
  res.render("create-user");
};

const getErrorPage = (req, res) => {
  res.render("error");
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email: email, password: password });
    await user.save();
    res.redirect("/error");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

module.exports = {
  getHomePage: getHomePage,
  getErrorPage: getErrorPage,
  createUser: createUser,
};
