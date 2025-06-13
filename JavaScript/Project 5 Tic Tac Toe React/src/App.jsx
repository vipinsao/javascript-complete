import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white">
      <Navbar />
      <Main className="flex-grow" />
      <Footer />
    </div>
  );
};

export default App;
