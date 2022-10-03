import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Index() {

  return (
    <Router basename={'/'}>
   
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </Router>

  );
}

export default Index;