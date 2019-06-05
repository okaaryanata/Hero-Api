const express = require('express');
const router = express.Router();
const Heroes = require('./models/heroes');

router.get('/heroes',function(req,res){
    res.send('GET Heroes')
})

router.post('/heroes',function(req,res){
    let {name, role} = req.body;
    
    // save to mongodb
    Heroes.create(req.body)
        .then(function(result){
            res.send(result);
        });
});

router.put('/heroes/:id',function(req,res){
    res.send('PUT Heroes')
})

router.delete('/heroes/:id',function(req,res){
    res.send('DELETE Heroes')
})

module.exports = router;