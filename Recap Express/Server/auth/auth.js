const authUser = (req, res, next) => {
  const { email, pin } = req.query;
  if (email === "gideonkirimanjaro@gmail.com" && pin === "6518") {
    next();
  } else {
    res.send("Unauthorized");
  }
};
module.exports = {
  authUser,
};
