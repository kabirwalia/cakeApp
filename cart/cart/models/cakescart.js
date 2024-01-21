const mongoose=require("mongoose")
const CakeSchema=mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    cakeid:Number,
},
{
    collection:'cart'
}
);
module.exports=mongoose.model('cart',CakeSchema);