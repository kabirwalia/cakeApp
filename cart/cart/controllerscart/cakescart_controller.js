const order=require("../models/cakescart");

function add(req,res){
    order.insertMany([req.body]).then(docs =>res.send('Order added'))
}
function display(req,res){
    order.find().then(docs =>res.send(docs))
}
function checkout(req,res){

    order.find().count()
    .then(order =>{
        if(order>0){
            res.send("Order Placed!!!")
        }
        else{
            res.send("No items in the cart")
        }
    })
}

module.exports={add,display,checkout}