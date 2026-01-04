const mongoose = require("mongoose");

const todoItemSchema = new mongoose.Schema({
    todoText: { type: String, required: true },
    todoDate: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TodoItem", todoItemSchema);