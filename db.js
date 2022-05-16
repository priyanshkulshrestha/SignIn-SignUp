const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        UseUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to db...");
    }catch(error){
        console.log(error)
    }
}