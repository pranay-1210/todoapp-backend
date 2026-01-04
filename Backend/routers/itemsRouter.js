const express = require("express");
const itemsController = require("../controllers/itemsController");

const itemsRouter = express.Router();


itemsRouter.post("/", itemsController.postTodoItem);
itemsRouter.get("/", itemsController.getTodos);
itemsRouter.delete("/:id", itemsController.deleteTodo);


module.exports = itemsRouter;
