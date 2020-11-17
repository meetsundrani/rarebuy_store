exports.signup = (req, res) => {
  console.log("BODY REQ", req.body);
  res.json({
    message: "Signup works!!!",
  });
};
exports.signout = (req, res) => {
  res.json({
    message: "Signout success",
  });
};
