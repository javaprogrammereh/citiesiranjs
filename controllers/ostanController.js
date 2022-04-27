const Ostan = require("../model/Ostan");

exports.createOstan = async (req, res, next) => {
  try {
    const { name } = req.body;
    const ostan = await Ostan.findOne({ name });
    if (ostan) {
      const error = new Error("نام استان در پایگاه داده موجود است");
      error.statusCode = 422;
      throw error;
    } else {
      await Ostan.create({ name });
      res.status(201).json({ messge: "نام استان با موفقیت ذخیره شد." });
    }
  } catch (err) {
    next(err);
  }
};

exports.getOstans = async (req, res, next) => {
  try {
    const numberOfOstan = await Ostan.find().countDocuments();
    const ostans = await Ostan.find().sort({
      createdAt: "asc",
    });
    if (!ostans) {
      const error = new Error("شهری با این شناسه یافت نشد");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ostans,total:numberOfOstan});
  } catch (err) {
    next(err);
  }
};

exports.searchHandler =async(req,res,next)=>{
  try {
    const numberOfOstan = await Ostan.find({
      $text:{$search:req.params.name},
    }).countDocuments();
    const ostans = await Ostan.find({
      $text:{$search:req.params.name},
    }).sort({
      createdAt: "asc",
    });
    if (!ostans) {
      const error = new Error("استانی با این شناسه یافت نشد");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ostans,total:numberOfOstan});
  } catch (err) {
    next(err);
  }
}; 
