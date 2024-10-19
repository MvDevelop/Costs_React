
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Company from "./components/Company";
import Contact from "./components/Contact";
import NewProject from "./components/NewProject";

import Container from "./components/layout/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/company' element={<Company />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/newproject' element={<NewProject />} />
            <Route exact path='/project/:id' element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
