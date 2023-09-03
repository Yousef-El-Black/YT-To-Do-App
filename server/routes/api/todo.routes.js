const { Router } = require("express");
const {
  createTodo,
  deleteTodo,
  updateTodo,
  getAllTodos,
  clearCompleted,
} = require("../../controllers/todo.controller");

const todoRoutes = Router();

todoRoutes.post("/", createTodo);

todoRoutes.delete("/:id", deleteTodo);

todoRoutes.delete("/", clearCompleted);

todoRoutes.put("/:id", updateTodo);

todoRoutes.get("/", getAllTodos);

module.exports = todoRoutes;
