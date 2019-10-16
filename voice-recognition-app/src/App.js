import React from "react";
import "./App.scss";
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import VoiceNotes from "./components/VoiceNotes";
import ExternalApi from "./components/ExternalApi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={VoiceNotes} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
