import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { nanoid } from "nanoid";
import { MovieList } from "./MovieList";

export const TodoList = () => {
  const [animationParent] = useAutoAnimate();

  //TodoList
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    setTodos((todos) => [...todos, { id: nanoid(), title: todo }]);
    setTodo("");

    e.preventDefault();
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="grid grid-cols-2 gap-14 ml-[10%] ">
      <div className="todoList">
        <form className="flex gap-x-2" onSubmit={handleSubmit}>
          <input
            className="flex-1 border rounded h-8 p-4  text-md"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            disabled={!todo}
            className="h-8 flex items-center px-4 py-4 rounded bg-blue-600 text-white "
          >
            Add todo
          </button>
        </form>

        <ul className="flex flex-col gap-y-2 mt-4" ref={animationParent}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="p-3 rounded bg-[#85a0ff] text-black  text-md flex justify-between"
            >
              {todo.title}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="h-7 text-md px-4 rounded  bg-[#d95c5c] text-white"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-4">
        <MovieList />
      </div>
    </div>
  );
};
