const mongoose=require('mongoose')

const Todo_Schema=new mongoose.Schema({
    title:String,
    priority:String
})

module.exports=mongoose.model('to_do_s',Todo_Schema)