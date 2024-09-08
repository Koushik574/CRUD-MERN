const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Users")

const app = express()

app.use(cors({ origin: ["http://localhost:5173", "https://crud-mern-xi-five.vercel.app/"] }))
app.use(express.json())

mongoose.connect("mongodb+srv://root:1234@cluster-1.onphs.mongodb.net/crud")

app.get("/", (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/addUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name, email: req.body.email, age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  });

app.listen(3000, () =>{
    console.log("Server is running in port 3000")
})