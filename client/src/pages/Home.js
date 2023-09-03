import React from "react";
import Header from "../components/Header";
import Todos from "../components/Todos";

const Home = () => {
  return (
    <div className="dark:bg-veryDarkBlue bg-veryLightGray min-h-screen">
      <img
        src="/images/bg-desktop-light.jpg"
        alt=""
        className="dark:hidden hidden md:block w-full object-cover absolute z-[1] top-0 left-0"
      />
      <img
        src="/images/bg-desktop-dark.jpg"
        alt=""
        className="dark:md:block hidden w-full object-cover absolute z-[1] top-0 left-0"
      />
      <img
        src="/images/bg-mobile-light.jpg"
        alt=""
        className="dark:hidden dark:md:hiddent md:hidden block z-[1] w-full object-cover absolute top-0 left-0"
      />
      <img
        src="/images/bg-mobile-dark.jpg"
        alt=""
        className="dark:block dark:md:hidden hidden md:hidden z-[1] w-full object-cover absolute top-0 left-0"
      />
      <div className="container my-20 mx-auto">
        <Header />

        {/* Add Todo Input */}
        <form className="bg-veryLightGray flex items-center p-4 mt-10 mb-5 rounded-lg drop-shadow-lg shadow-lg relative z-[2] dark:bg-veryDarkDesaturatedBlue dark:text-lightGrayishBlueDark">
          <button className="rounded-full bg-transparent w-8 h-8 text-[#fff] text-xl flex items-center justify-center font-extralight border-darkGrayishBlueLight border-2 duration-300 hover:bg-gradient-to-br	hover:from-checkBackground1 hover:to-checkBackground2 hover:border-none me-6">
            +
          </button>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="outline-none bg-[rgba(0,0,0,0)] text-xl"
          />
        </form>

        {/* Todos */}
        <Todos />
      </div>
    </div>
  );
};

export default Home;
