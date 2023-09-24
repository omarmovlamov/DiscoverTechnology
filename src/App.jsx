import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePages from "./components/HomePages";
import TechNews from "./components/TechNews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/technews" element={<TechNews />} />
      </Routes>
    </div>
  );
}

export default App;
