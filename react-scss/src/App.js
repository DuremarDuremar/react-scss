import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import HeaderReg from "./components/header/header-reg";

function App() {
  return (
    <div className="App">
      <HeaderReg />
      <Header />
      <div className="afisha">Afisha</div>
      <div className="saidbar">saidbar</div>
      <div className="content">content</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
