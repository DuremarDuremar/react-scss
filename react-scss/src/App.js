import React from "react";
import "./App.scss";
import HeaderTop from "./components/header-top";
import HeaderFront from "./components/header-front";
import Navigation from "./components/navigation";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderFront />
      <Navigation />
      <div className="center">
        <div className="container">
          <div className="center-wrapper">
            <Sidebar />
            <Main />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
