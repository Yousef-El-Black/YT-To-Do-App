import React from "react";

const Header = () => {
  const toggleTheme = () => {
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") !== "light" ? "light" : "dark"
    );
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex justify-between items-center w-full z-[2] relative">
      <div className="logo text-veryLightGray font-bold text-3xl md:text-6xl tracking-[10px] md:tracking-[20px]">
        TODO
      </div>
      <div className="switch">
        <img
          src="/images/icon-sun.svg"
          alt=""
          className="dark:block hidden cursor-pointer"
          onClick={toggleTheme}
        />
        <img
          src="/images/icon-moon.svg"
          alt=""
          className="dark:hidden block cursor-pointer"
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;
