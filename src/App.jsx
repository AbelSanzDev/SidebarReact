import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./components/App.css";
import { SideBar } from "./components/SideBar";
import { ButtonBar } from "./components/ButtonBar";
import { HomeIcon } from "./components/icons/HomeIcon";
import { Button } from "./components/Button";
import { DropDownOptions } from "./components/DropDownOptions";
import { ButtonDropDownBar } from "./components/ButtonDropDownBar";
function App() {
  return (
    <>
      <SideBar
        Name="Moaibi"
        src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
        TxtColor={"text-white"}
      >
        <ButtonBar icon={<HomeIcon />} TxtColor={"text-white"}>
          Home
        </ButtonBar>
        <ButtonDropDownBar
          icon={<HomeIcon />}
          Name={"Products"}
          TxtColor={"text-white"}
        >
          <DropDownOptions TxtColor={"text-white"}>Product1</DropDownOptions>
          <DropDownOptions TxtColor={"text-white"}>Product2</DropDownOptions>
          <DropDownOptions TxtColor={"text-white"}>Product3</DropDownOptions>
          <DropDownOptions TxtColor={"text-white"}>Product4</DropDownOptions>
        </ButtonDropDownBar>
      </SideBar>
    </>
  );
}

export default App;
