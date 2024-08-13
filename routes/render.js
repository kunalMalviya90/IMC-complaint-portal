const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('homepage');             //rendering home page
});

router.get('/userlogin', (req, res) => {
    res.render('userlogin');  
});


router.get('/filecomplaint', (req, res) => {
    res.render('filecomplaint'); 
});


module.exports = router;