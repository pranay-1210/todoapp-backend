import { TodoItemsContext } from "../store/TodoItemsContext";
import Button from "./Button";
import { useContext } from "react";
import { formatDate } from "../utils/DateUtil";

const TodoItem = ({ id, todoText, todoDate }) => {
  const { deleteTodoItem } = useContext(TodoItemsContext);

  const deleteHandler = () => {
    fetch(`http://localhost:3004/todos/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        deleteTodoItem(data.id);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-4">
      <div
        className="flex items-center justify-between gap-4
        rounded-2xl px-5 py-4
        bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50
        shadow-md hover:shadow-xl transition-all duration-200
        border border-indigo-100"
      >
        <div className="flex-1 truncate text-gray-800 text-base font-semibold">
          {todoText}
        </div>

        <div
          className="text-xs font-medium px-3 py-1 rounded-full
          bg-gradient-to-r from-indigo-500 to-purple-500
          text-white shadow-sm"
        >
          {formatDate(todoDate)}
        </div>

        <Button
          btnType="danger"
          btnText="Delete"
          handler={deleteHandler}
        />
      </div>
    </div>
  );
};

export default TodoItem;
