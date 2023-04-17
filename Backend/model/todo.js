const mongoose=require('mongoose')

const Todo_Schema=new mongoose.Schema({
    topic:String,
    complete:Boolean,
    level:String
})

module.exports=mongoose.model('to_do_s',Todo_Schema)