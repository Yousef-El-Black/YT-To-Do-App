const TodoModel = require("../models/todo.model");

const createTodo = async (req, res) => {
  try {
    const user = new TodoModel(req.body);
    const createdUser = await user.save();
    res.status(201).json(createdUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    await TodoModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Todo has been Deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateTodo = async (req, res) => {
  try {
    await TodoModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("Todo has been Updated!");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};

const clearCompleted = async (req, res) => {
  try {
    await TodoModel.deleteMany({ completed: true });
    res.status(200).json("Completed Todos has been Deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createTodo,
  deleteTodo,
  updateTodo,
  getAllTodos,
  clearCompleted,
};
