import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Location from "./Components/Location";
import Table from "./Components/Table";
import HookRedux from "./Components/HookRedux";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import "./StyleSheets/App.css";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/Home"} element={<Home />} />
          <Route path={"/Location"} element={<Location />} />
          <Route path={"/Table"} element={<Table />} />
          <Route path="/HookRedux" element={<HookRedux />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
