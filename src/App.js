import Starforce from "./components/Starforce";
import Data from "./components/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/sf_sim" element={<Starforce />} />
          <Route path="/sf_sim/data" element={<Data />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
