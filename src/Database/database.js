const mongoose = require("mongoose")
require("dotenv").config()
const port = process.env.URL

const connectDB = async ()=>{
    try {
        mongoose.connect(port)
        console.log('db is connect')
    }catch (e){
        console.log("db is  not connect")
    }
}

module.exports = connectDB