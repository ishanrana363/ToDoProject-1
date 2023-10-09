const ProfileModel = require("../models/ProfileModel")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
// User Create

exports.Create = async (req,res)=>{
    try{
        let reqBody = req.body
        let result = await ProfileModel.create(reqBody)
        res.status(201).json({
            status : "success",
            data : result
        })
    }catch (e){
        res.status(401).json({
            status : "fail",
            error : e.toString()
        })
    }
}


// User Login

// exports.login = async (req, res) => {
//     try {
//         const reqBody = req.body;
//         let UserName = req.body;
//         let EmailAddress = req.body;
//         let result = await ProfileModel.findOne({
//             $or: [
//                 { UserName },
//                 { EmailAddress }
//             ]
//         })
//
//         res.status(200).json({
//             status: "success",
//             data: result
//         });
//     } catch (e) {
//         res.status(401).json({
//             status: "fail",
//             error: e.toString()
//         });
//     }
// }

// User Login

exports.login = async (req,res) =>{
    try{
        let reqBody = req.body
        let {UserName,EmailAddress,Password} = req.body
        let result = await ProfileModel.findOne({
            UserName : UserName,
            Password : Password,
        }).count()
        if(result===1){
            // create jwt token
            let Payload = {
                exp : Math.floor(Date.now()/1000) + (24*60*60),
                data : reqBody["UserName"],
                data1 : reqBody["EmailAddress"],
                data2 : reqBody["FirstName"],
                data3 : reqBody["LastName"],
                data4 : reqBody["Password"]
            }
            let Token = jwt.sign(Payload,"ishan123456")
            res.status(200).json({
                status : "success",
                data : Token
            })

        }
    }catch (e){
        res.status(401).json({
            status : "fail",
            error : e.toString()
        })
    }
}


// Profile Details

exports.profileDetails = async (req,res)=>{
    try{
        let UserName = req.headers["UserName"]
        console.log(UserName)
        let result = await ProfileModel.find({UserName:UserName})
        res.status(200).json({
            status : "success",
            data : result
        })
    }catch (e){
        res.status(401).json({
            status : "fail",
            error : e.toString()
        })
    }
}

// Profile Update

exports.profileUpdate = async (req,res)=>{
    try {
        let UserName = req.headers["UserName"]
        let reqBody = req.body
        let result = await ProfileModel.updateOne({UserName : UserName,},reqBody)
        res.status(200).json({
            status : "success",
            data: result
        })
    }catch (e){
        res.status(401).json({
            status : "fail",
            error : e.toString()
        })
    }
}

// profile delete

exports.profileDelete = async (req,res)=>{
    try {
        let UserName = req.headers["UserName"]
        let id = new mongoose.Types.ObjectId(req.params.id)
        let query = {
            _id : id
        }
        let result = await ProfileModel.deleteOne({UserName: UserName},query)
        res.status(200).json({
            status : "success",
            data : result
        })
    }catch (e){
        res.status(401).json({
            status : "fail",
            error : e.toString()
        })
    }
}


























// if(result===1){
//     let Payload = {
//         exp : Math.floor(Date.now()/1000) + (34*60*60),
//         data : reaBody["UserName"],
//         data1 : reaBody["EmailAddress"]
//     }
//     let Token = jwt.sign(Payload,"ishan123456")
//     res.status(200).json({
//         status : "success",
//         data : Token
//     })
// }

































