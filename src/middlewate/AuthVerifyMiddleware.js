const jwt = require("jsonwebtoken")

module.exports = (req,res,next) =>{
    const Token = req.headers["token"]
    jwt.verify(Token,"ishan123456",function (err,decoded){
        if(err){
            console.log(Token)
            res.status(401).json({
                status : "Unauthorized"
            })
        }else {
            let UserName = decoded["data"]
            let EmailAddress = decoded["data1"]
            req.headers.UserName = UserName
            req.headers.EmailAddress = EmailAddress
            next()
        }
    })
}