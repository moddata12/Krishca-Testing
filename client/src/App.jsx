import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
import Login from "./pages/Login";
import Home from "./pages/userpages/Home";
import Dashboard from "./pages/userpages/Dashboard";
import Details from "./pages/userpages/Details";
import Service from "./pages/adminpages/Service";
import Control from "./pages/adminpages/Control";
import Client from "./pages/adminpages/Client";
import Report0 from "./components/table/Report0";
import Report1 from "./components/table/Report1";
import Report2 from "./components/table/Report2";
import Report3 from "./components/table/Report3";
import Report4 from "./components/table/Report4";
import Report5 from "./components/table/Report5";
import Report6 from "./components/table/Report6";
import Report7 from "./components/table/Report7";
import Report8 from "./components/table/Report8";
import Report9 from "./components/table/Report9";
import Report10 from "./components/table/Report10";
import Report11 from "./components/table/Report11";
import Report12 from "./components/table/Report12";
import Report13 from "./components/table/Report13";
import Report14 from "./components/table/Report14";
import Report15 from "./components/table/Report15";

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
         {/* Public route */} 
         <Route path="/" element={<Login />} /> 
          
          {/* Visitor routes */} 
          <Route path="/home" element={<Home />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/details" element={<Details />} /> 
          
          {/* Admin routes */} 
          <Route path="/control" element={<Control />} /> 
          <Route path="/client" element={<Client />} /> 
          <Route path="/service" element={<Service />} /> 

        {/* Table reports */}
        <Route path="/table/report0" element={<Report0 />} />
        <Route path="/table/report1" element={<Report1 />} />
        <Route path="/table/report2" element={<Report2 />} />
        <Route path="/table/report3" element={<Report3 />} />
        <Route path="/table/report4" element={<Report4 />} />
        <Route path="/table/report5" element={<Report5 />} />
        <Route path="/table/report6" element={<Report6 />} />
        <Route path="/table/report7" element={<Report7 />} />
        <Route path="/table/report8" element={<Report8 />} />
        <Route path="/table/report9" element={<Report9 />} />
        <Route path="/table/report10" element={<Report10 />} />
        <Route path="/table/report11" element={<Report11 />} />
        <Route path="/table/report12" element={<Report12 />} />
        <Route path="/table/report13" element={<Report13 />} />
        <Route path="/table/report14" element={<Report14 />} />
        <Route path="/table/report15" element={<Report15 />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
