import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars1 from "./components/EmployeeSubmit.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gaapproval from "./components/gaapproval.jsx";
import Report from "./components/Report.jsx";
import BusServiceSelection from "./components/BusServiceSelection.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cardrequest" element={<Avatars1 />} />
          <Route path="/cardrequestkannada" element={<Avatars1 />} />
          <Route path="/gaapproval" element={<Gaapproval />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
