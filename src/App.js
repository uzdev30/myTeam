import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
