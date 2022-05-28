import React from "react";
import Feed from "./Feed";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Widget from "./Widget";
import Login from "./Login";
import { auth, provider } from "./firebase";

function App() {
  const user = "shb";
  return (
    <div className="App">
      {user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="App_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
