import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import '../header.css'
import Sidebar from "./Sidebar";

function Index() {
  return (
    <div className="layout">
      <Sidebar />
      <Header />
      <main className="flex-1 p-6">
        <Outlet /> {/* Render nested pages here */}
      </main>
    </div>
  );
}

export default Index;
