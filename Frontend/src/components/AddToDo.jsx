import { TodoItemsContext } from "../store/TodoItemsContext";
import Button from "./Button";
import { useRef, useContext } from "react";
import { todoItemToClientModel } from "../utils/ModelUtil";

export function AddToDo() {
  const todoTextInput = useRef();
  const todoDateInput = useRef();
  const { addTodoItem } = useContext(TodoItemsContext);

  const addHandler = () => {
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;

    todoTextInput.current.value = "";
    todoDateInput.current.value = "";

    fetch("http://localhost:3004/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        task: todoText,
        date: todoDate,
      }),
    })
      .then((res) => res.json())
      .then((serverItem) => {
        const { id, todoText, todoDate } =
          todoItemToClientModel(serverItem);
        addTodoItem(id, todoText, todoDate);
      });
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-4 shadow-md">

        {/* Todo Input */}
        <input
          type="text"
          ref={todoTextInput}
          placeholder="What do you want to do?"
          className="flex-1 rounded-xl border border-indigo-200 bg-white px-4 py-3 text-sm
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
        />

        {/* Date Input */}
        <input
          type="date"
          ref={todoDateInput}
          className="rounded-xl border border-purple-200 bg-white px-3 py-3 text-sm
          focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition"
        />

        {/* Add Button */}
        <Button btnType="success" btnText="Add" handler={addHandler} />
      </div>
    </div>
  );
}

export default AddToDo;
