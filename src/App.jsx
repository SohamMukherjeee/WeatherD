import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ApiFetch from "./ApiFetch";
import Landing from "./Landing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<ApiFetch />} />
      </Routes>
    </Router>
  );
}

export default App;
