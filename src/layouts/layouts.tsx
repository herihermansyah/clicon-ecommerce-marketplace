import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layouts = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-50">
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
