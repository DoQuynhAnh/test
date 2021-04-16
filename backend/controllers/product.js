import Product from "../models/product";
import formidable from "formidable";
import fs from "fs";
import lodash from "lodash";

export const create = (req, res) => {
  const form = formidable.IncomingForm();
  form.keepExtension = true;
  form.parse(req, (err, fields, files) => {
    fields = { ...fields, isShipping: true, price: parseFloat(fields.price) };
    let newProduct = new Product(fields);
    const { name, description, price, isShipping, category } = fields;

    if (err) {
      return res.status(400).json({
        error: "Add product failed",
      });
    }

    if (!name || !description || !price || !isShipping || !category) {
      return res.status(400).json({
        error: "Vui lòng kiểm tra lại dữ liệu",
      });
    }

    if (files.photo) {
      if (files.photo.size > 2000000) {
        return res.status(400).json({
          error: "photo size is too large",
        });
      }
      newProduct.photo.data = fs.readFileSync(files.photo.path);
      newProduct.photo.contenType = files.photo.type;
    }

    newProduct.save((err, data) => {
      if (err) {
        console.log("error ", err);
        return res.status(400).json({
          error: "Add product failed",
        });
      }
      res.json(data);
    });
  });
};

export const read = (req, res) => {
  return res.json(req.data);
};

export const remove = (req, res) => {
  let deletedProducts = req.data;
  deletedProducts.remove((err, dataDeleted) => {
    if (err) {
      console.log("err: ", err);
      return res.status(400).json({
        err: "cannot delete this product",
      });
    }
    res.json({
      dataDeleted,
      msg: "xoá thành công !",
    });
  });
};

export const list = (req, res) => {
  Product.find((err, dataList) => {
    if (err) {
      res.status(400).json({
        err: "get list product falied",
      });
    }
    res.json(dataList);
  });
};

export const update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    fields = { ...fields, isShipping: true, price: parseFloat(fields.price) };
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    const { name, description, price, category } = fields;
    if (!name || !description || !price || !category) {
      res.status(400).json({
        error: "Vui lòng kiểm tra lại giữ liệu",
      });
    }

    let product = req.data;
    product = lodash.assignIn(product, fields);

    if (files.photo) {
      if (files.photo.size > 2000000) {
        return res.status(400).json({
          error: "photo size is too large",
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    console.log(product);

    product.save((err, data) => {
      if (err) {
        console.log("result ", data);
        return res.status(400).json({
          error: "có lỗi sảy ra",
        });
      }
      res.json(data);
    });
  });
};

// get img
export const photo = (req, res, next) => {
  if (req.data.photo.data) {
    res.set("Content-Type", req.data.photo.contentType);
    return res.send(req.data.photo.data);
  }
  next();
};

export const findID = (req, res, next, id) => {
  Product.findById(id).exec((err, data) => {
    if (err || !data) {
      console.log("err", err);
      return res.status(400).json({
        err: "find not found",
      });
    }
    req.data = data;
    next();
  });
};
