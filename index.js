//load env variables
if(process.env.NODE_ENV != "production"){
   require("dotenv").config()
}

//import dependencies
const express = require("express")
const cors = require("cors");
const connectToDb = require('./config/connectToDb')
const notesController = require('./controller/notesController')

//create express app
const app = express()

// Configure express app
app.use(express.json());
app.use(cors());

//connect to our database
connectToDb()

// Routing
app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

//Start the app
app.listen(process.env.PORT)