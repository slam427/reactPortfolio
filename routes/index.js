const apiRoutes = require ('./API');
const router = require('express').Router();

router.use('/api', apiRoutes);

module.exports = router;