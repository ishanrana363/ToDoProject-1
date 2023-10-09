const ProfileController = require("../controllers/ProfileController")
const AuthVerifyMiddleware = require("../middlewate/AuthVerifyMiddleware")
const ToDoController = require("../controllers/ToDoController")
const  express = require("express")
const router = express.Router()

// User Create
router.post("/create",ProfileController.Create)
// User Login
router.post("/login",ProfileController.login)
// profileDetails
router.get("/profileDetails",AuthVerifyMiddleware,ProfileController.profileDetails)
// profileUpdate
router.post("/profileUpdate",AuthVerifyMiddleware,ProfileController.profileUpdate)
// profile Delete
router.delete("/profileDelete/:id",AuthVerifyMiddleware,ProfileController.profileDelete)

// ToDoController
// Create To Do
router.post("/CreateToDo",AuthVerifyMiddleware,ToDoController.createToDo)
//select ToDo
router.get("/selectToDo",AuthVerifyMiddleware,ToDoController.ToDoSelect)
// ToDo Update
router.post("/ToDoUpdate/:id",AuthVerifyMiddleware,ToDoController.todoUpdate)
// ToDo Status Update
router.post("/ToDoStatusUpdate",AuthVerifyMiddleware,ToDoController.toDoStatusUpdate)
// Delete ToDo
router.delete("/deleteToDo",AuthVerifyMiddleware,ToDoController.deleteToDo)
// selecToDoByStatus
router.post("/selectToDoStatus",AuthVerifyMiddleware,ToDoController.selectToDoStatus)
// SelectToDoByDate
router.post("/SelectToDoByDate",AuthVerifyMiddleware,ToDoController.selectToDoByDate)



module.exports = router