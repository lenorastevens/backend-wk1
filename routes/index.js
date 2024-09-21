const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Hello, CSE 341 Professional Database Users.");
});

router.use('/professionalRoutes', require('./professionalRoutes'));

module.exports = router;