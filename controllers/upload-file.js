const imgSchema = require('../model/image-schema')

const handleUpload = async (req , res , next)=>{
    const obj = await imgSchema.create(req.body);
    res.status(200).send("uploaded");
}

module.exports = handleUpload