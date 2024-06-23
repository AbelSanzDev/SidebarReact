import React, { Children } from "react";
import { Button } from "./Button";

export const DropDownOptions = ({ children, TxtColor }) => {
  return (
    <Button className={`${TxtColor} m-3 text-xl rounded-md w-[100%]`}>
      {children}
    </Button>
  );
};
