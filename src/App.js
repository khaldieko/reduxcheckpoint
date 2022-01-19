import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";


import Homepage from "./Homepage";
import SignUp from "./signup";
import Mainpage from "./Mainpage";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/home" element={<Mainpage/>} />
          
        </Routes>
      </>
    </Router>
  );
}

export default App;