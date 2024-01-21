const mongoose = require("mongoose");
const connectDb = async () => {
    try{

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewURLParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('mongo DB connected comming from catalog db:  ${conn,connection.host}');
    }catch (err){
        console.log('from db.js catalog' + err);
        process.exit(1);
    }
}
module.export = connectDb;