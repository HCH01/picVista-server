const imgSchema = require('../model/image-schema')
const resObj = require('../utils/response-obj')
const asyncWrapper = require('../utils/async-error-handler')

const handleGetFiles = asyncWrapper(async (req, res, next)=>{
    const { limit } = req.query;

    const imagesQuery = imgSchema.find();

    if(limit){
        imagesQuery.limit(parseInt(limit));
    }

    const imagesDocs = await imagesQuery.exec();

    res.json(resObj(imagesDocs));
})
const getNameFiles = asyncWrapper(async (req, res, next)=>{
    const {name , limit} = req.query;
    if(!name) {
        next();
        return
    }
    const searchArray = name.split(/\s+/);
    const imagesQuery = imgSchema.find({
        tags : {$all : searchArray }
      });

    if(limit){
        imagesQuery.limit(parseInt(limit));
    }

    const imagesDocs = await imagesQuery.exec();

    res.json(resObj(imagesDocs));
})

module.exports = {
    getNameFiles,
    handleGetFiles
}