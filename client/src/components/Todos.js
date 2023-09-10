import { useState, useEffect } from "react";
import Todo from "./Todo";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState("all");
  const [selectedTodos, setSelecetedTodos] = useState([]);

  const handleClearCompleted = async () => {
    try {
      await axios.delete("http://localhost:8080/api/todos/");
      window.location.reload();
    } catch (err) {}
  };

  useEffect(() => {
    const fecthTodos = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/todos/");
        setTodos(
          res.data.sort((a, b) => {
            return -1;
          })
        );
      } catch (err) {}
    };
    fecthTodos();
  }, []);

  useEffect(() => {
    setSelecetedTodos(
      todos.filter((todo) => {
        return type === "all"
          ? todo
          : type === "active"
          ? todo.completed === false
          : todo.completed === true;
      })
    );
  }, [type, todos]);

  return (
    <div className="relative z-[2]">
      <div className="todos bg-veryLightGray dark:bg-veryDarkDesaturatedBlue rounded-lg drop-shadow-lg shadow-lg">
        {selectedTodos.map((todo) => {
          return (
            <Todo
              id={todo._id}
              text={todo.text}
              completed={todo.completed}
              key={todo._id}
            />
          );
        })}
        {selectedTodos.length === 0 && (
          <p className="text-center py-5 text-xl text-[#000] dark:text-[#fff]">
            No Data to Show
          </p>
        )}

        <div className="flex items-center justify-between p-4 text-darkGrayishBlueLight dark:text-veryDarkGrayishBlue1">
          <span>{selectedTodos.length} items left</span>
          <div className="hidden md:flex items-center gap-3">
            <span
              className={`cursor-pointer ${
                type === "all" && "text-brightBlue"
              }`}
              onClick={() => setType("all")}
            >
              All
            </span>
            <span
              className={`cursor-pointer ${
                type === "active" && "text-brightBlue"
              }`}
              onClick={() => setType("active")}
            >
              Active
            </span>
            <span
              className={`cursor-pointer ${
                type === "completed" && "text-brightBlue"
              }`}
              onClick={() => setType("completed")}
            >
              Completed
            </span>
          </div>
          <button className="cursor-pointer" onClick={handleClearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>

      <div className="flex md:hidden justify-around items-center gap-3 mt-5 bg-veryLightGray dark:bg-veryDarkDesaturatedBlue rounded-lg drop-shadow-lg shadow-lg p-4 text-darkGrayishBlueLight dark:text-veryDarkGrayishBlue1">
        <span
          className={`cursor-pointer ${type === "all" && "text-brightBlue"}`}
          onClick={() => setType("all")}
        >
          All
        </span>
        <span
          className={`cursor-pointer ${type === "active" && "text-brightBlue"}`}
          onClick={() => setType("active")}
        >
          Active
        </span>
        <span
          className={`cursor-pointer ${
            type === "completed" && "text-brightBlue"
          }`}
          onClick={() => setType("completed")}
        >
          Completed
        </span>
      </div>
    </div>
  );
};

export default Todos;
