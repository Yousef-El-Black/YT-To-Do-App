import React from "react";

const Todo = () => {
  return (
    <div className="border-b-veryDarkGrayishBlue border-b-[1px] p-4 flex items-center relative">
      <div className="bg-[rgba(0,0,0,0)] hover:bg-gradient-to-br hover:from-checkBackground1 hover:to-checkBackground2 rounded-full w-8 h-8 flex justify-center items-center me-5 border-darkGrayishBlueLight border-2 cursor-pointer hover:border-none">
        <img src="/images/icon-check.svg" alt="" />
      </div>
      <p className="text-veryDarkGrayishBlue dark:text-lightGrayishBlueDark">
        house painstrength sea age
      </p>
      <button>
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
