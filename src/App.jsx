import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import LoveDesign from "./Components/Home";
import LoveWebsite from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import FourthPage from "./Components/FourthPage";
import Envelope from "./Components/LetterBox";
import LastPage from "./Components/LastPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoveDesign />} index />
      <Route path="/second" element={<LoveWebsite />} />
      <Route path="/third" element={<ThirdPage />} />
      <Route path="/fourth" element={<FourthPage />} />
      <Route path="/fifth" element={<Envelope />} />
      <Route path="/last" element={<LastPage />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
