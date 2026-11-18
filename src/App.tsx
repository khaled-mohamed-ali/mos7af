import { useEffect, useState, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from "react";

import "./App.css";
import Surahs from "./features/pages/surahs-page/surahs";
import Navbar from "./components/navbar/navbar";
import { Outlet } from "react-router";

function App() {




  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}


export default App;
