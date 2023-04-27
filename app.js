const express = require("express")
const request = require("request")
const app = express()
const port = 3000
const date = require(__dirname + "/date.js")

app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');



const newTasks = ["stand up the morning"] // initialisation tasks activities
const newWorks = []

app.get("/", (req, res) => {
    
    const day = date.getDate();
    res.render("list", {listTitle: day, newListItems: newTasks})
})

app.post("/", (req, res) => {
    let newTask = ""
    let tasksList = ""
    if (req.body.list == 'Work') {
        tasksList = "work"
        newTask = req.body.todoTask
        newWorks.push(newTask)
        res.redirect("/work")
    } else {
        tasksList = "default"
        newTask = req.body.todoTask
        newTasks.push(newTask)
        res.redirect("/")
    }
    console.log(`${newTask} inserted in ${tasksList} list`)
})

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work", newListItems: newWorks})
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`)
})
