import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../header.css"; // Import CSS file

function Index() {
  return (
    <div className="layout">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <main className="outlet">
          <Outlet /> {/* Render nested pages here */}
        </main>
      </div>
    </div>
  );
}

export default Index;
