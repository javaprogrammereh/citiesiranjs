const {Router} = require('express');

const ostanController = require('../controllers/ostanController');

const router = new Router();

//  @desc   Register Handle
//  @route  POST /ostans/register
router.post("/register",ostanController.createOstan);
//  @desc   Show All
//  @route  GET /ostans/select-ostans
router.get("/select-ostans",ostanController.getOstans);
//  @desc   Search Ostans
//  @route  GET /ostans/search-ostans/:name
router.get("/search-ostans/:name",ostanController.searchHandler);


module.exports = router;