import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../modules/AfterAuth/Home";
import Login from "../modules/BeforeAuth/Login";
import Header from "../components/Header"

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppContainer;
