import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    document.title = "Service acceptoare bancnote";
  }, [page]);

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "services" && <Services />}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;
