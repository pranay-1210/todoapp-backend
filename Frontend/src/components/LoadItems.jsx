import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import {TodoItems } from "./TodoItems"
import { useEffect } from "react";
import { useState } from "react";
import { todoItemToClientModel } from "../utils/ModelUtil";

export function LoadItems() {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3004/todos")
      .then((res) => res.json())
      .then((items) => {
        const newItems = items.map(todoItemToClientModel);
        addAllTodoItems(newItems);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

const Spinner = () => {
  return <div className="spinner"></div>;
};


  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && todoItems.length === 0 && <p>Enjoy your day</p>}
    </>
  )
}
