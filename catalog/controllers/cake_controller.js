//const books = require("../models/books");
const cakes=require("../models/cakes");

function getallcakes(req,res){
    cakes.find().then(docs =>res.send(docs))
}
function getcakesbyname(req,res){
    cakes.find({name:req.params.name})
    .then(docs =>res.send(docs))
    .catch(err => res.send(err))
    
}
function getcakesbyprice(req,res){
    cakes.find({price:{$gt:req.params.min , $lt:req.params.max}})
    .then(docs =>res.send(docs))
    .catch(err => res.send(err))
}

module.exports={getallcakes,getcakesbyname,getcakesbyprice}