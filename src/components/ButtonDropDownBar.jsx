import React, { useContext } from "react";
import { ButtonDropDown } from "./ButtonDropDown";
import { AppContex } from "./AppContex";
import { HomeIcon } from "./icons/HomeIcon";

export const ButtonDropDownBar = ({ children, Name, icon = "" }) => {
  const { isOpen, setIsOpen } = useContext(AppContex);
  const handleChangeDirectionTrue = () => {
    setIsOpen(true);
  };
  return (
    <ButtonDropDown
      className={"w-[100%] pl-5 text-2xl font-thin text-white rounded-md"}
      BgColor={"bg-[#0c0c0c83]"}
      StartSvg={icon}
      isOpen={isOpen}
      handleChangeDirectionTrue={handleChangeDirectionTrue}
      Name={isOpen ? Name : ""}
    >
      {children}
    </ButtonDropDown>
  );
};
