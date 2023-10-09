// Basic Lib Import
const express = require("express")
const app = express()
const router = require("./src/routes/api")


// Security Middleware Lib Import
const cors = require("cors")
const mongoSanitize = require("express-mongo-sanitize")
const hpp = require("hpp")
const helmet = require("helmet")
const eliminate = require("express-rate-limit")
const morgan = require("morgan")
const {urlencoded} = require("express");

// Security Middleware Implement
app.use(cors())
app.use(mongoSanitize())
app.use(hpp())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Rate Limiter

let limit = eliminate({
    windowMs : 15*60*10000,
    max : 2000
})
app.use(limit)

// Api Implement

app.use("/api/v1/",router)

app.use("*",(req,res)=>{
    res.status(404).json({
        status : "Routes not found"
    })
})




module.exports = app