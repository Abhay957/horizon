import {Routes,Route} from "react-router-dom";
import Mockman from "mockman-js";

import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/mock-api" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
