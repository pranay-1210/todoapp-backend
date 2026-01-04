exports.get404 = (req, res, next) => {
  console.log("404 path:", req.originalUrl);
  res.status(404).json({ message: "Page Not Found" });
};
