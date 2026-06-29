import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layouts = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="grow">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layouts;
