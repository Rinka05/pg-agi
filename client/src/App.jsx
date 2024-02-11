import "./App.css";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home.jsx";
import { Login } from "./components/Pages/login/Login.jsx";
import { Signup } from "./components/Pages/signup/Signup.jsx";
import { Blog } from "./components/Pages/Blog.jsx";
import { Contact } from "./components/Pages/Contact.jsx";



function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  </>

  );
}

export default App;