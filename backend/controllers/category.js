import Category from "../models/category";
import lodash from "lodash";
import formidable from "formidable";

export const create = (req, res) => {
  const form = formidable.IncomingForm();
  form.keepExtension = true;
  form.parse(req, (err, fields, files) => {
    const category = new Category(fields);
    const { name } = fields;
    console.log("value: ", fields);

    if(err) {
      console.log(err);
      return res.status(400).json({
        err: "kiểm tra lại giữ liệu"
      })
    }

    if (!name) {
      return res.status(400).json({
        err: "Yêu cầu nhập tên danh mục",
      });
    }

    category.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: "Category does not exist",
        });
      }
      res.json({ data });
    });
  });
};

export const read = (req, res) => {
  return res.json(req.category);
};

export const remove = (req, res) => {
  let deletedCategory = req.category;
  deletedCategory.remove((err, dataDeleted) => {
    if (err) {
      console.log("err: ", err);
      return res.status(400).json({
        err: "cannot delete this category",
      });
    }
    res.json({
      dataDeleted,
      msg: "xoá thành công !",
    });
  });
};

export const list = (req, res) => {
  Category.find((err, listCategory) => {
    if (err) {
      res.status(400).json({
        err: "cannot get lits category",
      });
    }
    res.json(listCategory);
  });
};

export const upadate = (req, res) => {
  const form = formidable.IncomingForm();
  form.keepExtension = true;
  form.parse(req, (err, fields, files) => {
    let category = new Category(lodash.assignIn(req.category, fields));
    const { name } = fields;
    console.log("value: ", fields);

    if(err) {
      console.log(err);
      return res.status(400).json({
        err: "kiểm tra lại giữ liệu"
      })
    }

    if (!name) {
      return res.status(400).json({
        err: "Yêu cầu nhập tên danh mục",
      });
    }

    category.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: "Category does not exist",
        });
      }
      res.json({ data });
    });
  });
};

export const findID = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      res.status(400).json({
        err: "find not found",
      });
    }

    req.category = category;
    next();
  });
};
