import React from "react";
// import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../header.css"; // Import CSS file
import AppHeader from "./Header";

function Index() {
  return (
    <div className="layout">
        <AppHeader />
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
