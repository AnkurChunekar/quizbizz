import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Footer } from "./components";
import { Home, Quiz, Result, Rules } from "./pages";

function App() {
  return (
    <div className="bg-dark-bg">
      <div className="text-neutral-50 min-h-screen max-w-screen-xl mx-auto flex flex-col gap-6">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
