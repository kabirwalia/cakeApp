const mongoose=require("mongoose")
const CakeSchema=mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    cakeid:Number,
},
{
    collection:'catalog'
}
);
module.exports=mongoose.model('catalog',CakeSchema);