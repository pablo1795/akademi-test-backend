var express = require('express');
var router = express.Router();
const employeeRoutes = require('./employee.route');
const assetRoutes = require('./asset.route');

router.use("/employee", employeeRoutes)
router.use("/asset", assetRoutes)

module.exports = router;
