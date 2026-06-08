import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import About from "./pages/About";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={setPage} />;

      case "project":
        return <Project />;

      case "experience":
        return <Experience />;

      case "about":
        return <About />;

      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} />
      {renderPage()}
    </>
  );
}

export default App;