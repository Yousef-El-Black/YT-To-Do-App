import axios from "axios";
import React from "react";

const Todo = ({ id, text, completed }) => {
  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:8080/api/todos/" + id);
      window.location.reload();
    } catch (err) {}
  };

  const handleCompleted = async () => {
    try {
      await axios.put("http://localhost:8080/api/todos/" + id, {
        completed: !completed,
      });
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="border-b-veryDarkGrayishBlue border-b-[1px] p-4 flex items-center relative">
      <div
        onClick={handleCompleted}
        className={`bg-[rgba(0,0,0,0)] hover:bg-gradient-to-br hover:from-checkBackground1 hover:to-checkBackground2 rounded-full w-8 h-8 flex justify-center items-center me-5 border-darkGrayishBlueLight border-2 cursor-pointer hover:border-none ${
          completed
            ? "bg-gradient-to-br from-checkBackground1 to-checkBackground2 border-none"
            : ""
        }`}
      >
        {completed && <img src="/images/icon-check.svg" alt="" />}
      </div>
      <p
        className={`text-veryDarkGrayishBlue dark:text-lightGrayishBlueDark ${
          completed && "line-through"
        }`}
      >
        {text}
      </p>
      <button onClick={handleDelete}>
        <img
          src="/images/icon-cross.svg"
          alt=""
          className="absolute right-5 top-[50%] translate-y-[-50%] cursor-pointer"
        />
      </button>
    </div>
  );
};

export default Todo;
