const mongoose = require("mongoose");

const mongoConnect = async (url)=>{
    return mongoose.connect(url,{
        autoIndex: false,
    })
}

module.exports = mongoConnect