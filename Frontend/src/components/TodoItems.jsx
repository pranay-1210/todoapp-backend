import { TodoItemsContext } from "../store/TodoItemsContext";
import TodoItem from "./TodoItem";
import { useContext } from "react";

export function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="space-y-4">
      {todoItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-10 rounded-xl
          bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50
          border border-indigo-100 text-center">
          
          <div className="text-4xl mb-3">🎯</div>

          <p className="text-sm font-medium text-gray-600">
            No todos yet
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Add your first task above to get started
          </p>
        </div>
      )}

      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoText={item.todoText}
          todoDate={item.todoDate}
        />
      ))}
    </div>
  );
}
