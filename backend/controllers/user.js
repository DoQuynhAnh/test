import User from "../models/auth";

export const findIdUser = (req, res, next, id) => {
  User.findById(id).exec((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user;
    next();
  });
};

export const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;

  return res.json(req.profile);
};

export const update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          err: "Bạn không được phép thực hiện trong hành động",
        });
      }
      req.profile.hashed_password = undefined;
      req.profile.salt = undefined;
      res.json(user);
    }
  );
};