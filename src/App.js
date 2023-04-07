import "./App.css";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Post from "./Components/Post";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Other from "./Components/Other";
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/Post" element={<Post/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Other" element={<Other/>} />v
        </Routes>
      </Router>
    </>
  );
}

export default App;