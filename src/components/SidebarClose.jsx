import React, { useContext, useEffect, useState } from "react";
import { AppContex } from "./AppContex";

export const SidebarClose = ({ children, className }) => {
  //*with that useEffect i can cotroll the width size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { setIsOpen } = useContext(AppContex);
  return (
    <div
      className={className}
      onClick={() => (windowWidth < 1022 ? setIsOpen(false) : "")}
    >
      {children}
    </div>
  );
};
