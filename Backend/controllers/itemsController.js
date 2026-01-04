const TodoItem = require("../model/TodoItem");

exports.postTodoItem = async (req, res, next) => {
  try {
    console.log(req.body);

    const todoItem = new TodoItem({
      todoText: req.body.task,
      todoDate: req.body.date,
    });

    const savedItem = await todoItem.save();

    res.status(201).json({
      id: savedItem._id,
      task: savedItem.todoText,
      date: savedItem.todoDate,
    });

  } catch (err) {
    next(err);
  }
};


exports.getTodos = async (req, res, next) => {
  try {
    const todos = await TodoItem.find();

    res.status(200).json(
      todos.map(item => ({
        id: item._id,
        task: item.todoText,
        date: item.todoDate
      }))
    );
  } catch (err) {
    next(err);
  }
};


exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log(id,"Came to delete");

    await TodoItem.findByIdAndDelete(id);

    // frontend ye expect karta hai
    res.status(200).json({ id });
  } catch (err) {
    next(err);
  }
};