import React from "react";
import Todo from "./Todo";

const Todos = () => {
  return (
    <div className="relative z-[2]">
      <div className="todos bg-veryLightGray dark:bg-veryDarkDesaturatedBlue rounded-lg drop-shadow-lg shadow-lg">
        <Todo />
        <Todo />
        <Todo />
        <Todo />

        <div className="flex items-center justify-between p-4 text-darkGrayishBlueLight dark:text-veryDarkGrayishBlue1">
          <span>5 items left</span>
          <div className="hidden md:flex items-center gap-3">
            <span className="cursor-pointer">All</span>
            <span className="cursor-pointer">Active</span>
            <span className="cursor-pointer">Completed</span>
          </div>
          <button className="cursor-pointer">Clear Completed</button>
        </div>
      </div>

      <div className="flex md:hidden justify-around items-center gap-3 mt-5 bg-veryLightGray dark:bg-veryDarkDesaturatedBlue rounded-lg drop-shadow-lg shadow-lg p-4 text-darkGrayishBlueLight dark:text-veryDarkGrayishBlue1">
        <span className="cursor-pointer">All</span>
        <span className="cursor-pointer">Active</span>
        <span className="cursor-pointer">Completed</span>
      </div>
    </div>
  );
};

export default Todos;
