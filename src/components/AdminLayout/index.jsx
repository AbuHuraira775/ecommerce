import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <div className="layout">
      <Header />
      <main className="flex-1 p-6">
        <Outlet /> {/* Render nested pages here */}
      </main>
    </div>
  );
}

export default Index;
