import { useContext } from "react";
import { AppContex } from "./AppContex";
import { HomeIcon } from "./icons/HomeIcon";
import { Button } from "./Button";

export const ButtonBar = ({ children, icon = "" }) => {
  const { isOpen } = useContext(AppContex);
  return (
    <div>
      <Button
        className={
          "w-[100%] pl-5 text-2xl font-thin bg-transparent rounded-md text-white"
        }
        StartSvg={isOpen ? icon : null}
      >
        {isOpen ? children : icon === "" ? <HomeIcon /> : icon}
      </Button>
    </div>
  );
};
