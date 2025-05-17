const express = require('express');
const router = express.Router();

const routesOtavio = requires('./routes_otavio');

router.use('/', routesOtavio)

module.exports = router;






