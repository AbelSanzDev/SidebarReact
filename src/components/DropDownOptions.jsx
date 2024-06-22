import React, { Children } from "react";
import { Button } from "./Button";

export const DropDownOptions = ({ children }) => {
  return (
    <Button className={"text-white m-3 text-xl rounded-md w-[100%]"}>
      {children}
    </Button>
  );
};
