const City = require("../model/City");

exports.createCity = async (req, res, next) => {
  try {
    const { name } = req.body;
    const city = await City.findOne({ name });
    if (city) {
      const error = new Error("نام شهر در پایگاه داده موجود است");
      error.statusCode = 422;
      throw error;
    } else {
      await City.create({ name, ostan: req.params.id });
      res.status(201).json({ messge: "نام شهر با موفقیت ذخیره شد." });
    }
  } catch (err) {
    next(err);
  }
};

exports.selectCities = async (req, res, next) => {
  try {
    // const cities = await City.find({ ostan: req.params.id }).populate("ostan");
    const cities = await City.find({ ostan: req.params.id });

    if (!cities) {
      const error = new Error("شهری با این شناسه یافت نشد");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ cities });
  } catch (err) {
    next(err);
  }
};

exports.getCities = async (req, res, next) => {
  try {
    const numberOfCities = await City.find().countDocuments();
    const cities = await City.find();
    if (!cities) {
      const error = new Error("شهری با این شناسه یافت نشد");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ cities, numberOfCities });
  } catch (err) {
    next(err);
  }
};

exports.singleCity = async (req, res, next) => {
  try {
    const city = await City.findOne({ _id: req.params.id });
    if (!city) {
      const error = new Error("شهری با این شناسه یافت نشد");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ city });
  } catch (err) {
    next(err);
  }
};

exports.searchHandler = async (req, res, next) => {
  try {
    const numberOfCities = await City.find({
      $text: { $search: req.params.name },
    }).countDocuments();
    const cities = await City.find({
      $text: { $search: req.params.name },
    }).sort({
      createdAt: "asc",
    });
    if (!cities) {
      const error = new Error("شهری با این شناسه یافت نشد");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ cities, total: numberOfCities });
  } catch (err) {
    next(err);
  }
};
