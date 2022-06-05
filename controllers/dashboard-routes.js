const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('dashboard')
});

router.get('/edit/:id', (req, res) => {

    res.render('edit-post')

});

router.get('/create/', (req, res) => {

    res.render('create-post')

});




module.exports = router;