const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, cate) => {
    if (err || !cate) {
      return res.status(400).json({
        error: "Category Not Found",
      });
    }
    req.category = cate;
    next();
  });
};

exports.createCategory = (req, res) => {
  const category = new Category(req.body);
  Category.save((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Category Not Found in DB",
      });
    }
    res.json({ category });
  });
};
