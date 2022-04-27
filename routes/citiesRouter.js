const {Router} = require('express');

const citiesController = require('../controllers/citiesController');

const router = new Router();

//  @desc   Register Handle
//  @route  POST /cities/register/:id
router.post("/register/:id",citiesController.createCity);
//  @desc   Select Handle
//  @route  GET /cities/select-cities/:id
router.get("/select-cities/:id",citiesController.selectCities);
//  @desc   All Cities
//  @route  GET /cities/all-cities
router.get("/all-cities",citiesController.getCities);
//  @desc   Single City
//  @route  GET /cities/single-city/:id
router.get("/single-city/:id",citiesController.singleCity);
//  @desc   Search City
//  @route  GET /cities/search-cities/:name
router.get("/search-cities/:name",citiesController.searchHandler);


module.exports = router;