var express = require('express');
var router = express.Router();
const cake_controller=require("../controllers/cake_controller");


router.get('/', cake_controller.getallcakes);
router.get('/:name', cake_controller.getcakesbyname);
router.get('/:min/:max', cake_controller.getcakesbyprice);

module.exports = router;