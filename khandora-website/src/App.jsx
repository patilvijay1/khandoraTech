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
import SoftwareDevelopment from "./pages/Services/SoftwareDevelopment";
import MobileAppDevelopment from "./pages/Services/MobileAppDevelopment";

function App() {
  return (
    <AppProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Service Routes */}
          <Route
            path="/services/software-development"
            element={<SoftwareDevelopment />}
          />
          {/* <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          /> */}
          {/* <Route
            path="/services/website-development"
            element={<WebsiteDevelopment />}
          />
          <Route
            path="/services/cloud-solutions"
            element={<CloudSolutions />}
          />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/services/it-consulting" element={<ItConsulting />} /> */}

          {/* Product Routes */}
          {/* <Route path="/products/erp" element={<ERPSolutions />} />
          <Route path="/products/crm" element={<CRMSoftware />} />*/}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </AppProvider>
  );
}

export default App;
