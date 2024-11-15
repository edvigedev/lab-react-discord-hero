// src/App.jsx
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
    </div>
  );
}

export default App;
