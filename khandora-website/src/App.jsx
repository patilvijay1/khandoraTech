import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/common/Layout/Layout";
import Home from "./pages/Home/Home";
import { AppProvider } from "./context/AppContext";
import Products from "./components/sections/Products/Products";
import Services from "./components/sections/Services/Services";
import About from "./components/sections/About/About";
import Contact from "./components/sections/Contact/Contact";

function App() {
  return (
    <AppProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </AppProvider>
  );
}

export default App;
