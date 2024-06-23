## Modern and Responsive Sidebar

Welcome to our modern and responsive sidebar solution! Designed to adapt seamlessly across all devices and screen sizes, our sidebar enhances user experience by providing easy navigation and accessibility in various contexts.

**Key Features:**

- **Responsive Design:** Ensures optimal viewing and interaction experience on any device, from desktops to mobile phones.
- **Sleek and Intuitive:** Combines modern aesthetics with intuitive functionality, making navigation straightforward and enjoyable.
- **Customizable:** Tailor the sidebar to fit your application's unique design requirements effortlessly.

-[Demo](sidebar-react-pro-v1.netlify.app)

## main.jsx || main.js

You need the SidebarProvider in your main file for the application to work.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SidebarProvider } from "./components/SidebarProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*This is the component that you need*/}
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);
```

## You need tailwind

-[Tailwind for react and vite](https://tailwindcss.com/docs/guides/vite)
When you have Tailwind in your project, you may need to add a line of code to the tailwind.config.js file if necessary.

**This is line that you need to add**

```javaScript
"./node_modules/sidebar-react-pro/dist/**/*.{js,ts,jsx,tsx}",
```

**This is how your code needs to look**

```javaScript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/sidebar-react-pro/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Sidebar

```javascript
import {
  SideBar,
  ButtonBar,
  ButtonDropDownBar,
  DropDownOptions,
} from "sidebar-react-pro";

function App() {
  return (
    <>
      <SideBar
        Name="Moaibi"
        src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
      >
        <ButtonBar icon={<HomeIcon />}  TxtColor="text-white">Home</ButtonBar>
        <ButtonDropDownBar icon={<HomeIcon />  TxtColor="text-white"} Name={"Products"}>
          <DropDownOptions  TxtColor="text-white">Product1</DropDownOptions>
          <DropDownOptions  TxtColor="text-white">Product2</DropDownOptions>
          <DropDownOptions  TxtColor="text-white">Product3</DropDownOptions>
          <DropDownOptions  TxtColor="text-white">Product4</DropDownOptions>
        </ButtonDropDownBar>
        {/*You can also use TxtColor for change the color of the text of the bottons*/}
      </SideBar>
    </>
  );
}

export default App;
```

## Sidebar props

```javascript
import { SideBar } from "sidebar-react-pro";

function App() {
  return (
    <>
      <SideBar
        src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
        // URL for your company logo
        Name="Moaibi"
        // Name of your company
        TxtColor="text-white"
        //This is for change the color of the company Name
        ButtonColor="bg-[#a87abe]"
        // Background color of the sidebar toggle button (open/close button)
        BgColor="bg-[#1c1c1c]"
        // Background color of the sidebar; defaults to #1c1c1c if not specified
        BgImage="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713594373/Portfolio/kh7azy142fknzrmstqed.jpg"
        // URL for a background image to be used in the sidebar
      ></SideBar>
    </>
  );
}

export default App;
```
