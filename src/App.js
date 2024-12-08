import React from "react";
import Header from "./components/header/Header";
import Page from "./pages/Page.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Routes>
          <Route path="/" element={<Page img='images/1.jpg' title='Модель 1'/>}/>
          <Route path="/shop" element={<Page img='images/2.jpg' title='Модель 2'/>}/>
          <Route path="/products" element={<Page img='images/3.jpg' title='Модель 3'/>}/>
          <Route path="*" element={<Page img='images/3.jpg' title='Модель 3'/>}/>
        </Routes>
    </div>
  );
}

export default App;
