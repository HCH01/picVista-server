const jwt = require('jsonwebtoken')

const auth = (req, res, next)=>{
    const token = req.headers.authorization;
    if(!token) {
        res.redirect("/auth/login")
        return
    }
    try {
        const decodedData = jwt.verify(token.split(' ')[1],process.env.ACCESS_TOKEN_KEY);
        if(!decodedData){
            res.redirect("/auth/login")
            return
        }
    } catch (error) {
        next(error)
    }
    next();
}

module.exports = auth