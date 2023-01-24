import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
