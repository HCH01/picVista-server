const route = require('express').Router();
const handleUpload = require('../controllers/upload-file')
const {handleGetFiles, getNameFiles} = require('../controllers/retrieve-file')

route.post('/upload',handleUpload);

route.get('/retreive',getNameFiles,handleGetFiles);

module.exports = route