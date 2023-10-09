const ToDoListModel = require("../models/ToDoListModel")
const mongoose = require("mongoose")

// Create ToDo

exports.createToDo = async (req,res)=>{
    try {
        let reqBody = req.body
        let TodoSubject = reqBody["TodoSubject"];
        let ToDoDescription = reqBody['ToDoDescription']
        let UserName = req.headers["UserName"]
        let ToDoStatus = "New";
        let ToDoCreateDate = Date.now()
        let ToDoUpdate = Date.now()
        let postBody = {
            TodoSubject:TodoSubject,
            ToDoDescription:ToDoDescription,
            UserName : UserName,
            ToDoStatus : ToDoStatus,
            ToDoCreateDate : ToDoCreateDate,
            ToDoUpdate : ToDoUpdate,
        }
        let result = await ToDoListModel.create(postBody)
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

// ToDo Select

exports.ToDoSelect = async (req,res)=>{
    try {
        let UserName = req.headers['UserName']
        let result = await ToDoListModel.find({
            UserName : UserName
        })
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

// ToDo Update

exports.todoUpdate = async (req,res) =>{
    try {
        let TodoSubject = req.body["TodoSubject"];
        let ToDoDescription = req.body["ToDoDescription"];
        let ToDoUpdate = Date.now()
        let id = req.params.id
        const result = await ToDoListModel.findByIdAndUpdate(
            id,
            {
                TodoSubject,
                ToDoDescription,
                ToDoUpdate,
            },
            { new: true }
        );
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

// ToDo Status

exports.toDoStatusUpdate = async (req,res)=>{
    try {
        let ToDoStatus = req.body["ToDoStatus"]
        let ToDoUpdate = Date.now()
        let id = new mongoose.Types.ObjectId(req.body._id)
        const result = await ToDoListModel.findByIdAndUpdate(
            id,
            {
                ToDoStatus,
                ToDoUpdate
            },
            { new: true }
        );
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

// Delete ToDo

exports.deleteToDo = async (req,res)=>{
    try {
        let id = new mongoose.Types.ObjectId(req.body._id)
        let query = {
            _id : id
        }
        let result = await ToDoListModel.deleteOne(query)
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

// select to do status

exports.selectToDoStatus = async (req,res)=>{
    try {
        let UserName = req.headers['UserName']
        let ToDoStatus = req.body["ToDoStatus"]
        let result = await ToDoListModel.find({
            UserName : UserName,
            ToDoStatus : ToDoStatus
        })
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

// Select ToDoByDate

exports.selectToDoByDate = async (req,res)=>{
    try {
        let UserName = req.headers["UserName"]
        let FromDate = req.body["FromDate"]
        let ToDate = req.body["ToDate"]
        let result = ToDoListModel.find({
            UserName : UserName,
            ToDoCreateDate : {$gte : new Date(FromDate), $lte : new Date(ToDate) }
        })
    }catch (e){

    }
}














































































































