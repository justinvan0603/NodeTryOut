var express = require('express');
var router = express.Router();
var Person = require('../entities/person');
var mongoose = require("mongoose");
router.get('/', function(req, res) {
  Person.find({}).exec( function(err,persons) {
    if(err){

      res.send("Error: " + err.message);
    }
    console.log(persons);
    res.json(persons);
  }

    );
  });
  router.post('/',function(req,res){
    Person.create({name:"ThangVTQ", address:"Pestalozzistrasse"}).then(data =>{
      console.log("ABC");
        res.json(data);
    }).catch(err => {
      console.log("Error: " + err);
      res.send(err);
    }
    );
  });
  router.put('/:id',function(req,res){
    if(req.params.id){
      Person.findOneAndUpdate(req.params.id,{name: req.body.name , address: req.body.address})
      .then(data => {res.json(data);})
      .catch(err=> {res.send(err);});
    }
  });
  router.delete('/:id',function(req,res){
    if(req.params.id){
      Person.findOneAndDelete(req.params.id)
      .then(data=> {res.json(data);})
      .catch(err => {res.send(err);});
    }
  });
  module.exports = router;