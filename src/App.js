import "./App.css";
import AllComponent from "./components/component_manager/allComponent";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/register/login";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AllComponent />} />
          <Route path="/signIn" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
