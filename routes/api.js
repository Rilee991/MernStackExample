const express = require('express');

const router = express.Router();

const testModel = require('../models/testModel');
//ROUTES
router.get('/', (req,res) => {
    testModel.find({ })
        .then((data) => {
            console.log('Data:', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error occurred', error);
        });
});

router.post('/save', (req,res) => {
    console.log('Data :', req.body);
    res.json({
        msg: 'Data recieved'
    });
});

router.get('/name', (req,res) => {
    const data = {
        username : 'cypher',
        age : 33
    }
    res.json(data);
});

module.exports = router;