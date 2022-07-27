import Starforce from "./components/Starforce";
import Data from "./components/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Starforce />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
