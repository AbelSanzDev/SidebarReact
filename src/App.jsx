import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./components/App.css";
import { SideBar } from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideBar Name="Moaibi"></SideBar>
    </>
  );
}

export default App;
