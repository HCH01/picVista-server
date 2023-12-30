var mongoose = require('mongoose');
var imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true]
    },
    img:{
        type: String,
        required: [true, 'img src required']
    },
    uploadedOn:{
        type: String,
        default: new Date().toDateString()
    },
    tags : {
        type: [String],
        required: [true,'tags are required']
    },
    imgSize: {
        type: String,
        required: [true,'imgSize required']
    }
});
 
module.exports = mongoose.model('Image', imageSchema);
