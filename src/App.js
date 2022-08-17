import './App.css';
import Login from './login';
import Home from './home';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function  App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;