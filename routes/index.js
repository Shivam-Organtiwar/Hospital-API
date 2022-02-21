const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');



router.get('/',homeController.home);
router.use('/api',require('./api/index'));


module.exports = router;