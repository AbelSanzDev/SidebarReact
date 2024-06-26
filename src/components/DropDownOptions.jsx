import React, { Children } from "react";
import { Button } from "./Button";
import { SidebarClose } from "./SidebarClose";

export const DropDownOptions = ({ children, TxtColor, onClick }) => {
  return (
    <SidebarClose>
      <Button
        onClick={onClick}
        className={`${TxtColor} m-3 text-xl rounded-md w-[90%]`}
      >
        {children}
      </Button>
    </SidebarClose>
  );
};
