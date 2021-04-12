import News from "../models/news";
import formidable from "formidable";
import fs from "fs";
import lodash from "lodash";

export const create = (req, res) => {
  const form = formidable.IncomingForm();
  form.keepExtension = true;
  form.parse(req, (err, fields, files) => {
    
  })
};
