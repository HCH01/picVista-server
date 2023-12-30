function responseObj (resObj) {
    return {
        status : 'success',
        length : resObj.length,
        data : resObj
    }
}

module.exports = responseObj