const express = require('express');
const router = express.Router();
const viewController = require(__basedir + '/controllers/viewController');

router.route('/').get(viewController.index).post(viewController.form);
router.route('/users').get(viewController.users);
router.route('/user/:id').get(viewController.user);
module.exports = router;
