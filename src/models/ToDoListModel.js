const mongoose = require("mongoose")
const DataSchema = new mongoose.Schema({
    UserName : {
        type : String
    },
    TodoSubject : {
        type : String
    },
    ToDoDescription : {
        type : String
    },
    ToDoStatus : {
        type : String,
    },
    ToDoCreateDate : {
        type : Date,
    },
    ToDoUpdate : {
        type : Date
    },


},{versionKey: false})

const ToDoModel = mongoose.model("toDoList",DataSchema)
module.exports = ToDoModel