import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetAppButton from "./GetAppButton";
import RegisterPage from "./RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetAppButton />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
