import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProjectPage from "./Projects/index.js";
function App() {
  return (
    <div>
      <ProjectPage />
    </div>
  );
}

export default App;
