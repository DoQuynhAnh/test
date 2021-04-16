import News from "../models/news";
import formidable from "formidable";
import fs from "fs";
import lodash from "lodash";

export const create = (req, res) => {
  const form = formidable.IncomingForm();
  form.keepExtension = true;
  form.parse(req, (err, fields, files) => {
    let news = new News(fields);
    const { title, description } = fields;

    if (err) {
      return res.status(400).json({
        error: "Add product failed",
      });
    }

    if (!title || !description ) {
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
      news.photo.data = fs.readFileSync(files.photo.path);
      news.photo.contenType = files.photo.type;
    }

    news.save((err, data) => {
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
  return res.json(req.news);
};

export const remove = (req, res) => {
  let deletedNews = req.news;
  deletedNews.remove((err, dataDeleted) => {
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
  News.find((err, dataList) => {
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
    const { title, description } = fields;

    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    if (!title || !description) {
      res.status(400).json({
        error: "Vui lòng kiểm tra lại giữ liệu",
      });
    }

    let news = req.news;
    news = lodash.assignIn(news, fields);

    if (files.photo) {
      if (files.photo.size > 2000000) {
        return res.status(400).json({
          error: "photo size is too large",
        });
      }
      news.photo.data = fs.readFileSync(files.photo.path);
      news.photo.contentType = files.photo.type;
    }

    // console.log(product);

    news.save((err, data) => {
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

export const photo = (req, res, next) => {
  if (req.news.photo.data) {
    res.set("Content-Type", req.data.photo.contentType);
    return res.send(req.data.photo.data);
  }
  next();
};

export const findID = (req, res, next, id) => {
  News.findById(id).exec((err, data) => {
    if (err || !data) {
      console.log("err", err);
      return res.status(400).json({
        err: "find not found",
      });
    }
    req.news = data;
    next();
  });
};