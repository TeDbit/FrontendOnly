import React from "react";
import "./App.css";
import  Navbar  from "./Components/Navbar/Navbar";
import  Sidepanel from "./Components/Sidepanel/Sidepanel";
import Dashboard from "./Pages/Dashboard"
import New from "./Pages/New"
import Clients from "./Pages/Clients"
import Sent from "./Pages/Sent"
import Inbox from "./Pages/Inbox"
import Drafts from "./Pages/Drafts"
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Settings from "./Pages/Settings";
import About from "./Pages/About";

function App() {
  return (
      <BrowserRouter>
        <div id="allBody">
          <Navbar></Navbar>
          <div id="center">
            <div id="sidepCont">
            <Sidepanel> </Sidepanel>
            </div>
             
            <div id="main">
            <Routes>
                <Route path="/" element={<New/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/clients" element={<Clients/>}/>
                <Route path="/sent" element={<Sent/>}/>
                <Route path="/inbox" element={<Inbox/>}/>
                <Route path="/drafts" element={<Drafts/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/about" element={<About/>}/>
                
              </Routes>
            </div>

                
            </div>
       </div>
      
      
      </BrowserRouter>

  );
}

    // <div id="allBody">
    //   <Navbar />
    //   <div id="center">
    //     <Sidepanel />
    //     <Main />
    //   </div>
    // </div>
export default App;
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
