import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="mx-4">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
