const Todo = require('../model/todo');


exports.getAlltodo=async (req,res)=>{
  try {
    const todo= await Todo.find();
    return res.status(200).json({
        data:todo,
        length:todo.length
    })
  } catch (error) {
    return res.status(500).json({
        msg:'server error'
   })

  }
}

exports.create_todo=async(req,res)=>{
  try {
      const newTodo=req.body
      console.log(newTodo);
      await Todo.create(newTodo)
      res.status(201).json({
          msg:"created"
      })
  } catch (error) {
      return res.status(500).json({
          msg:"server error"
      })
  }
}

exports.updateTodo=async(req,res)=>{
  try {
   await Todo.findByIdAndUpdate(req.params.id,{...req.body})
   res.send("update success")
   res.status(200).json({
       
   })
  } catch (error) {
        console.log("not update error");
  }
 
}

exports.deleteTodo=async(req,res)=>{
  try {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json({
      msg:"deleted successfully"
    })
  } catch (error) {
    res.status(500).json({
      msg:"not delete"
    })
  }
}