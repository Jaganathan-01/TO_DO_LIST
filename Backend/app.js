const express=require('express')
const bodyParser = require('body-parser');
const connectDB = require("./config/db.js");
const { getAlltodo, create_todo, updateTodo, deleteTodo } = require('./contoller/todo.js');
const cors = require('cors')
const app=express()
connectDB()
app.use(cors())
app.use(bodyParser.json())
app.get('/api/todo/health',(req,res)=>
{
    res.status(200).send("Health Check");
})

app.get('/api/todo', getAlltodo);
app.post('/api/todo/create', create_todo);
app.put('/api/todo/:id', updateTodo);
app.delete('/api/todo/:id', deleteTodo);

app.listen(3000,async()=>{
    console.log("server running");
})