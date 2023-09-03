const { Router } = require("express");
const todoRoutes = require("./api/todo.routes");

const router = Router();

router.use("/todos", todoRoutes);

module.exports = router;
